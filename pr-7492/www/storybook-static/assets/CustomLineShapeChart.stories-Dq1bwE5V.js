import{R as t}from"./iframe-D38iL5U2.js";import{a as p}from"./isWellBehavedNumber-DYmqkCh1.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-JnpryM_R.js";import{R as T}from"./zIndexSlice-Cm67KrxL.js";import{C as M}from"./CartesianGrid-Bx94-WYC.js";import{X as $}from"./XAxis-DxvBJIAO.js";import{Y as I}from"./YAxis-DusBbeDI.js";import{L as O}from"./Legend-CbomiUSH.js";import{T as W}from"./Tooltip-BxKOkrFr.js";import{L as C}from"./Line-CtYC6NCl.js";import{C as X}from"./Curve-BojgfvlB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-khzbl4AQ.js";import"./resolveDefaultProps-CZPTys3h.js";import"./RechartsWrapper-cRl9bCbj.js";import"./index-CrafHmD2.js";import"./index-BjsidNXN.js";import"./index-CiQf90fk.js";import"./index-CtVCdopk.js";import"./immer-D6830BYN.js";import"./renderedTicksSlice-BJAgGPRy.js";import"./axisSelectors-31vNEB3v.js";import"./d3-scale-B4F2Cask.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BM1M8_5y.js";import"./chartDataContext-kB1Q6Xdj.js";import"./CategoricalChart-CpYTfgB7.js";import"./CartesianAxis-C6E7eU9j.js";import"./Layer-BW7UV7J4.js";import"./Text-DbYnM2_N.js";import"./DOMUtils-o62mw7wr.js";import"./Label-CTZsXBnJ.js";import"./ZIndexLayer-B3mrn3nC.js";import"./types-CVlGri0W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DL6ypLxG.js";import"./symbol-q5QB_D2d.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D7DgYNl3.js";import"./uniqBy-Cp1_UUmE.js";import"./iteratee-CHjXHaoo.js";import"./useAnimationId-CrM4tScF.js";import"./Cross-BYjRI3Ng.js";import"./Rectangle-BaDJNhGo.js";import"./util-Dxo8gN5i.js";import"./Sector-CQb59x5M.js";import"./AnimatedItems-6eA2Tj-j.js";import"./ActivePoints-CKKFmVGR.js";import"./Dot-CGulo8wH.js";import"./RegisterGraphicalItemId-D4Xqb6PN.js";import"./ErrorBarContext-BaHC-CpM.js";import"./GraphicalItemClipPath-CgNMFQt0.js";import"./SetGraphicalItem-D8AKKKBR.js";import"./getRadiusAndStrokeWidthFromDot-C_jGICtX.js";import"./ActiveShapeUtils-DKkm8SfY.js";import"./step-0VurBbtl.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
