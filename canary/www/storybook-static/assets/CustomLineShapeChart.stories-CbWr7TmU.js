import{R as t}from"./iframe-BT2fAbbB.js";import{a as p}from"./isWellBehavedNumber-LZ0iz-Mn.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CvnuXhal.js";import{R as T}from"./zIndexSlice-0bHXttbZ.js";import{C as M}from"./CartesianGrid-vXCbkaod.js";import{X as $}from"./XAxis-BoVnFGs6.js";import{Y as I}from"./YAxis-ChrnpRQE.js";import{L as O}from"./Legend-DwJmbAop.js";import{T as W}from"./Tooltip-Bfhr633F.js";import{L as C}from"./Line-D6orMjMD.js";import{C as X}from"./Curve-5RTqUT5x.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C017lSC3.js";import"./resolveDefaultProps-C3R0rg6J.js";import"./RechartsWrapper-BdzpqzJC.js";import"./index-BploPkwU.js";import"./index-DkhzDGLz.js";import"./index-CVxrCFbF.js";import"./index-Doyfjfw4.js";import"./immer-Cs_HwjFQ.js";import"./renderedTicksSlice-CiEsNdJ7.js";import"./axisSelectors-BROcexci.js";import"./d3-scale-DCH5M94w.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-kqjinDmq.js";import"./chartDataContext-BrLfw6WI.js";import"./CategoricalChart-CkHyoyCb.js";import"./CartesianAxis-BeeS8R2V.js";import"./Layer-CwmO2g8o.js";import"./Text-Bl7vRhlA.js";import"./DOMUtils-BAS9saz0.js";import"./Label-BKr83VYg.js";import"./ZIndexLayer-vZErJXnS.js";import"./types-UgUXQeZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CBCiu4_t.js";import"./symbol-B-UyWOPJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DxfqGQMG.js";import"./uniqBy-CE3wruLK.js";import"./iteratee-JLoe2DiT.js";import"./useAnimationId-B9b4cNZQ.js";import"./Cross-DbWE21IQ.js";import"./Rectangle-BI2jxxVC.js";import"./util-Dxo8gN5i.js";import"./Sector-BxOoJOCl.js";import"./AnimatedItems-B9eraKkz.js";import"./ActivePoints-DVgNgNPk.js";import"./Dot-BCEb4Rzy.js";import"./RegisterGraphicalItemId-rv099XyT.js";import"./ErrorBarContext-Dl3pruuO.js";import"./GraphicalItemClipPath-BtLAGmDV.js";import"./SetGraphicalItem-C_0DsyJ6.js";import"./getRadiusAndStrokeWidthFromDot-CAQ9ByQw.js";import"./ActiveShapeUtils-aZ-707nn.js";import"./step-CJvEyRUy.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
