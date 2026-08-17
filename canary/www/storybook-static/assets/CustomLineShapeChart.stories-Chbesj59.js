import{R as t}from"./iframe-0BZy6ovm.js";import{a as s}from"./isWellBehavedNumber-D86CElyX.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DY4IBODK.js";import{R as T}from"./zIndexSlice-BIk5RwDD.js";import{C as M}from"./CartesianGrid-C1oJnFXa.js";import{X as $}from"./XAxis-CpzBATa7.js";import{Y as I}from"./YAxis-vaHPQHN5.js";import{L as O}from"./Legend-BYhpegXH.js";import{T as W}from"./Tooltip-CZnNvi-A.js";import{L as C}from"./Line-BqjDeTuk.js";import{C as X}from"./Curve-80kkET8R.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DgX86JLB.js";import"./RechartsWrapper-DN-j5lzD.js";import"./index-C9HBA5-V.js";import"./index-BRBcTSHI.js";import"./index-TucVX7sw.js";import"./index-BJl6RyTQ.js";import"./throttle-DiDu5xyi.js";import"./axisSelectors-D-aV3CxY.js";import"./d3-scale-D3apC1JT.js";import"./renderedTicksSlice-BqoCmvXn.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-n4Lt6mFH.js";import"./chartDataContext-BAuSJd-k.js";import"./CategoricalChart-hrSTyr7f.js";import"./CartesianAxis-D2KJhy7k.js";import"./Layer-6uGVVV7y.js";import"./Text-Bh7Xcfw9.js";import"./DOMUtils-D2BAAnEX.js";import"./useBackwardsCompatibleTheme-CXpr_aCI.js";import"./Label-C0FrVcAE.js";import"./ZIndexLayer-AgSG9OQ6.js";import"./types-CUmyHBBS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dw0UsXtJ.js";import"./symbol-CC9QiqhF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjmvUNAh.js";import"./uniqBy-B6coPXXs.js";import"./iteratee-XKFyRSES.js";import"./useAnimationId-D-aszzjL.js";import"./Cross-BtKgilIw.js";import"./Rectangle-Qt8i-seL.js";import"./util-Dxo8gN5i.js";import"./Sector-CPbFIiWl.js";import"./AnimatedItems-B0lHzkOL.js";import"./ActivePoints-Cv_MWE-P.js";import"./Dot-B2MNIfB_.js";import"./RegisterGraphicalItemId-BhyVkMoB.js";import"./ErrorBarContext-D0zljKj-.js";import"./GraphicalItemClipPath-BgcM8yOE.js";import"./SetGraphicalItem-CM7A1obe.js";import"./getRadiusAndStrokeWidthFromDot-BStcUf-0.js";import"./ActiveShapeUtils-BtFIRlOA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-LsS_armE.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Ht=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
