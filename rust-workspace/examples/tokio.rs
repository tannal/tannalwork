use std::{thread, time};
use tokio::time::{sleep, Duration};

async fn hello_world() -> String {
    "Hello World".to_string()
}

async fn hello(name: &str) -> String{
    format!("Hello {}", name)
}

fn blocking_call() -> String {

    thread::sleep(time::Duration::from_secs(5));

    "after 5s sleep".to_string()
}

async fn async_call(id: i32) {

    sleep(Duration::from_secs(1)).await;

    println!("Async Call: ID {}", id);
}

#[tokio::main]
async fn main() {
    let value = hello_world();
    let join_handle = tokio::spawn(hello("Marcus"));
    
    let value = join_handle.await.unwrap();
    
    println!("{}", value);


    let blocking_call_handle = tokio::task::spawn_blocking(blocking_call);

    let mut async_handles = Vec::new();

    for id in 0..10 {
        async_handles.push(tokio::spawn(async_call(id)));
    }
    
    for handle in async_handles {
        handle.await.unwrap();
    }
    
    let result = blocking_call_handle.await.unwrap();
    println!("Blocking result {}", result);

}
