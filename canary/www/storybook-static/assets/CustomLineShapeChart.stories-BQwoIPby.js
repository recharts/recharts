import{R as t}from"./iframe-DsxZlU5r.js";import{a as p}from"./isWellBehavedNumber-CTT7gzfy.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CrNb1G3c.js";import{R as T}from"./zIndexSlice-C9X4WKOn.js";import{C as M}from"./CartesianGrid-MyFoq73o.js";import{X as $}from"./XAxis-CYz9D79b.js";import{Y as I}from"./YAxis-BnTqZW5t.js";import{L as O}from"./Legend-BIJ6GnsP.js";import{T as W}from"./Tooltip-Bi7KeNHc.js";import{L as C}from"./Line-35w6scH_.js";import{C as X}from"./Curve-CSIe3S-R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-txR9uiFl.js";import"./RechartsWrapper-BwO2SplL.js";import"./axisSelectors-BqZ8E3_i.js";import"./throttle-UzrpYZZa.js";import"./index-BsKriH0J.js";import"./index-Dkn7Rgxy.js";import"./d3-scale--_ZfhLG0.js";import"./index-NKDSt5W_.js";import"./index-B7c49aj4.js";import"./renderedTicksSlice-DrjN0-hZ.js";import"./index-BlUmu3HQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D7Lk4UPu.js";import"./chartDataContext-BuJB6SDT.js";import"./CategoricalChart-mfjR9F1v.js";import"./CartesianAxis-xh5AQvWr.js";import"./Layer-C9CQXPgt.js";import"./Text-rMrFJjxt.js";import"./DOMUtils-DeolnxnC.js";import"./useId-CXqbyXNP.js";import"./useBackwardsCompatibleTheme-CMuNrJmL.js";import"./Label-W_BNIllg.js";import"./ZIndexLayer-B5VyzAKQ.js";import"./types-DNLq32QI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C0ZgxGkt.js";import"./symbol-C5SjR8iA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CkmTikZn.js";import"./uniqBy-CaKEfqj9.js";import"./iteratee-Bn0tiKsf.js";import"./useAnimationId-BTOaFYFg.js";import"./Cross-Bj59EFsY.js";import"./Rectangle-Y7TKK3zv.js";import"./util-Dxo8gN5i.js";import"./Sector-BwPHwtT0.js";import"./AnimatedItems-D0Io6hoN.js";import"./ActivePoints-BMZtXxjb.js";import"./Dot-CitZKaHy.js";import"./RegisterGraphicalItemId-FY2E50jC.js";import"./ErrorBarContext-BSpxN_KO.js";import"./GraphicalItemClipPath-D9CdDoZo.js";import"./SetGraphicalItem-DMEejLkA.js";import"./getRadiusAndStrokeWidthFromDot-Ddp4bide.js";import"./ActiveShapeUtils-DWfz214x.js";import"./useGraphicalItemIdentity-DcyTJT25.js";import"./step-Dj6yUh6h.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
