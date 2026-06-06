import{R as t}from"./iframe-DyLoEKVT.js";import{a as p}from"./isWellBehavedNumber-DNtaqKPn.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C_b7mVzM.js";import{R as T}from"./zIndexSlice-BMJvLT6-.js";import{C as M}from"./CartesianGrid-ANxmcrPG.js";import{X as $}from"./XAxis-9OVyrDRG.js";import{Y as I}from"./YAxis-nsTECOPY.js";import{L as O}from"./Legend-nAvx1kVW.js";import{T as W}from"./Tooltip-BTj4vQK0.js";import{L as C}from"./Line-DRaTauJz.js";import{C as X}from"./Curve-aK0jXQoR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DowO2FG-.js";import"./resolveDefaultProps-v4--KFNE.js";import"./RechartsWrapper--UzxIxEu.js";import"./index-CufWBdFA.js";import"./index-PISW76kq.js";import"./index-ChIcT5we.js";import"./index-DlqbmUdM.js";import"./immer-BagcJtG2.js";import"./renderedTicksSlice-BqkZndXs.js";import"./axisSelectors-CnSKWHKt.js";import"./d3-scale-CTXcb0ZT.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BuXwJSrD.js";import"./chartDataContext-DJBEQzNo.js";import"./CategoricalChart-nR7o8SXq.js";import"./CartesianAxis-DVRkpibw.js";import"./Layer-1PJWGF6B.js";import"./Text-DbHSmtym.js";import"./DOMUtils-DO9od7PA.js";import"./Label-Bc99EiAM.js";import"./ZIndexLayer-DHFxHLUr.js";import"./types-ChV1_7kb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BgFHj5o9.js";import"./symbol-BzH8IghT.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DniPY9C-.js";import"./uniqBy-YTTRAMug.js";import"./iteratee-KqbZdyCL.js";import"./useAnimationId-C3XlQNNz.js";import"./Cross-mSJJOKzg.js";import"./Rectangle-C19lR5AX.js";import"./Sector-BMTKBdCE.js";import"./AnimatedItems-DZ2CDn43.js";import"./ActivePoints-Cgvb9XOf.js";import"./Dot-Cj91nRDm.js";import"./RegisterGraphicalItemId-CalLmt4D.js";import"./ErrorBarContext-CuSWRyRz.js";import"./GraphicalItemClipPath-B_O83OKV.js";import"./SetGraphicalItem-Ve1ljg4L.js";import"./getRadiusAndStrokeWidthFromDot-BLbyixQ6.js";import"./ActiveShapeUtils-DR5RhSUS.js";import"./step-BI2jLazT.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
