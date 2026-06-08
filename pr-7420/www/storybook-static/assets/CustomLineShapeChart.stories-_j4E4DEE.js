import{R as t}from"./iframe-BGeanFOP.js";import{a as p}from"./isWellBehavedNumber-BHEyknYr.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CgYgf-1f.js";import{R as T}from"./zIndexSlice-DNSx6PWp.js";import{C as M}from"./CartesianGrid-DIYWtD6j.js";import{X as $}from"./XAxis-DgRdCkIO.js";import{Y as I}from"./YAxis-nfM60xrE.js";import{L as O}from"./Legend-W3eeAJ18.js";import{T as W}from"./Tooltip-Cc5Cgkep.js";import{L as C}from"./Line-DMiEAOHx.js";import{C as X}from"./Curve-Db2zYE8-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-74Zc7Ouu.js";import"./resolveDefaultProps-fa-Aou02.js";import"./RechartsWrapper-CglI8KYy.js";import"./index-Be2A9QLd.js";import"./index-DMs8Ncya.js";import"./index-ywOkgYAE.js";import"./index-D4eYnHXo.js";import"./immer-Ba__3GQM.js";import"./renderedTicksSlice-CZmWC0Pi.js";import"./axisSelectors-B9MbVKUE.js";import"./d3-scale-DG6z6DUu.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Da0n2f02.js";import"./chartDataContext-itTBInKu.js";import"./CategoricalChart-K-eTl3yz.js";import"./CartesianAxis-BCs8btUF.js";import"./Layer-D0e6T1oI.js";import"./Text-B_9O6xoI.js";import"./DOMUtils-CoWv9FZp.js";import"./Label-CBWHmy26.js";import"./ZIndexLayer-gVlIv7an.js";import"./types-Uf272Grm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D3KDRtFF.js";import"./symbol-DYZKPaAC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-uPFxcMrP.js";import"./uniqBy-DSO5Q0bs.js";import"./iteratee-DXgvlm8k.js";import"./useAnimationId-Cqn1EcvY.js";import"./Cross-DLJoHQSf.js";import"./Rectangle-BfTmTDK0.js";import"./Sector-DEijCMgI.js";import"./AnimatedItems-C1hTs3HP.js";import"./index-BPJnJB5S.js";import"./ActivePoints-iE89yCuz.js";import"./Dot-CWPUI1sE.js";import"./RegisterGraphicalItemId-DsxBoKW-.js";import"./ErrorBarContext-BGfqcTM-.js";import"./GraphicalItemClipPath-Rse-X5zx.js";import"./SetGraphicalItem-BEY5qE9v.js";import"./getRadiusAndStrokeWidthFromDot-D7EeDBWL.js";import"./ActiveShapeUtils-CNEGy-9v.js";import"./step-DzzVSfhx.js";const Nt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,qt as __namedExportsOrder,Nt as default};
