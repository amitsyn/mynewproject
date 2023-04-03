export default function News({data}){
    return <h1>{data}</h1>
}
export async function getStaticProps(context){
   
    
    return{
        
        props:{
            
            data:context.preview ? "List of draft articles": "List of published articles"
        },
    }
}