import{R as t}from"./iframe-BpBItmb8.js";import{a as p}from"./isWellBehavedNumber-Q3FqKNV7.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-fFlRAsCS.js";import{R as T}from"./zIndexSlice-Cjb21_4Z.js";import{C as M}from"./CartesianGrid-D3DKDnpA.js";import{X as $}from"./XAxis-tyIX1Ek0.js";import{Y as I}from"./YAxis-ggvkQSih.js";import{L as O}from"./Legend-B9j0MFCN.js";import{T as W}from"./Tooltip-16Wzpvlu.js";import{L as C}from"./Line-CYgss46t.js";import{C as X}from"./Curve-pkSnYbQi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BIOpi0B9.js";import"./RechartsWrapper-BaBorYia.js";import"./axisSelectors-DhTQuZeq.js";import"./throttle-Cdo2rlHX.js";import"./index-CeEoeaxD.js";import"./index-BHZp9bX2.js";import"./d3-scale-B2krDzkw.js";import"./index-B9ogi8SM.js";import"./index-Do7_Vkj1.js";import"./renderedTicksSlice-BqaS8KpG.js";import"./index-C1AeM7Yu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDWDYlWD.js";import"./chartDataContext-CgZ-KInW.js";import"./CategoricalChart-9xHNb1kz.js";import"./CartesianAxis-BCv_yRQ4.js";import"./Layer-DJh0sOtA.js";import"./Text-BsqzutiJ.js";import"./pageBackground-Dn3J6qJY.js";import"./useId-DaRO87cF.js";import"./useBackwardsCompatibleTheme-CZ-OPOyh.js";import"./Label-D427CKrx.js";import"./ZIndexLayer-8Y_K5uPK.js";import"./dataEntryStyles-CqfS8fAi.js";import"./types-Dpz8_0OY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CndC3_OM.js";import"./symbol-D5Qx-mBR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CjCU98kl.js";import"./uniqBy-0vSrRUTV.js";import"./iteratee-BEHFzf7T.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-B0lGZ7N8.js";import"./Cross-CDQrvEQG.js";import"./Rectangle-Cc2PuLg6.js";import"./util-Dxo8gN5i.js";import"./Sector-Bo0u2rms.js";import"./activeStyles-BpJuNb5z.js";import"./ActivePoints-DOY_2oPT.js";import"./Dot-DQOKyqZV.js";import"./RegisterGraphicalItemId-CrKPJKPG.js";import"./ErrorBarContext-Dxg5DLJl.js";import"./SetGraphicalItem-CJwlJ3sC.js";import"./getRadiusAndStrokeWidthFromDot-BPVDV2Ck.js";import"./ActiveShapeUtils-BOsiS21F.js";import"./useEffectiveDataKey-UghoeVMt.js";import"./step-CWAoAVng.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
