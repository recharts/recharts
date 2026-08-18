import{R as t}from"./iframe-BqyXYbfO.js";import{a as s}from"./isWellBehavedNumber-BRVst2EZ.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-B9Ih3QqK.js";import{R as T}from"./zIndexSlice-B01GboJR.js";import{C as M}from"./CartesianGrid-Cx0cizls.js";import{X as $}from"./XAxis-0w0QIVSx.js";import{Y as I}from"./YAxis-CPeQqwFp.js";import{L as O}from"./Legend--uIoEOCQ.js";import{T as W}from"./Tooltip-DfxM-Zzf.js";import{L as C}from"./Line-CA8PuEEu.js";import{C as X}from"./Curve-B6fu5Ruc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B3i-Tg0K.js";import"./RechartsWrapper-D3v9xwCM.js";import"./index-CVfSI7O7.js";import"./index-bCeEKDHC.js";import"./index-Bv49Pgrm.js";import"./index-B9uHeZTZ.js";import"./throttle-CuHL7VMX.js";import"./axisSelectors-DpUYmlyC.js";import"./d3-scale-YUujBWq4.js";import"./renderedTicksSlice-7sTJiycY.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-0syXRV9F.js";import"./chartDataContext-D6yTmy2l.js";import"./CategoricalChart-RVKqvA7y.js";import"./CartesianAxis-DueGTPVP.js";import"./Layer-cG34Tdrq.js";import"./Text-DOHx7LgO.js";import"./DOMUtils-btZL_iKn.js";import"./useBackwardsCompatibleTheme-BlCAIHy1.js";import"./Label-oragi0Kj.js";import"./ZIndexLayer-rhqIudSr.js";import"./types-B7ADV__L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DnBmXhc1.js";import"./symbol-IA9FIS8n.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DExtgCNc.js";import"./uniqBy-DKsxBLj8.js";import"./iteratee-I9oDQ_jw.js";import"./useAnimationId-CK12bq4f.js";import"./Cross-4aVT25Mq.js";import"./Rectangle-CftrBWbD.js";import"./util-Dxo8gN5i.js";import"./Sector-B2YMZGu7.js";import"./AnimatedItems-CpV-NRBb.js";import"./ActivePoints-CiwZFN_M.js";import"./Dot-C0u3Avpo.js";import"./RegisterGraphicalItemId-Ck8ajZX3.js";import"./ErrorBarContext-BGgmDGm5.js";import"./GraphicalItemClipPath-DDxOeQm3.js";import"./SetGraphicalItem-DNxW0R1P.js";import"./getRadiusAndStrokeWidthFromDot-HXIFwiLB.js";import"./ActiveShapeUtils-1I6X1s88.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./step-B3dTMrU0.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let a=1,S=p.length;a<S;++a){let b=0;const r=p[a-1],i=p[a];if(s(r.x)&&s(r.y)&&s(i.x)&&s(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
