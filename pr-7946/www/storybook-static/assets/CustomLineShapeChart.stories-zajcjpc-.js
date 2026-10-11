import{R as t}from"./iframe-Cz1yxjbp.js";import{a as p}from"./isWellBehavedNumber-DJ2sQW5i.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C_SieLmW.js";import{R as T}from"./zIndexSlice-DX3VWAAP.js";import{C as M}from"./CartesianGrid-C2xiZsRS.js";import{X as $}from"./XAxis-DTtwNRvk.js";import{Y as I}from"./YAxis-YGbQi-tl.js";import{L as O}from"./Legend-ASL-GeNA.js";import{T as W}from"./Tooltip-DIfKxzT5.js";import{L as C}from"./Line-DOXtn5Fz.js";import{C as X}from"./Curve-BuFNKnyX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C4uWhlBE.js";import"./RechartsWrapper-DNAVCaGG.js";import"./axisSelectors-aNzSC39T.js";import"./throttle-C8kMLDgG.js";import"./index-Dy-7Z4OS.js";import"./index-BeLMDhbN.js";import"./d3-scale-DcjoLk-1.js";import"./index-Cvw52HpG.js";import"./index-CrhYCmzz.js";import"./renderedTicksSlice-B4zhNEhU.js";import"./index-BH1YgSAq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bs3sClFN.js";import"./chartDataContext-D9TeAJoj.js";import"./CategoricalChart-L3mAew-j.js";import"./CartesianAxis-C6EZvJj2.js";import"./Layer-DX0-A7eX.js";import"./Text-Ct14p3WC.js";import"./pageBackground-Aluj06Yi.js";import"./useId-BgDV8Bbk.js";import"./useBackwardsCompatibleTheme-DMuqWF8p.js";import"./Label-CKYWHIAB.js";import"./ZIndexLayer-CpvAEusS.js";import"./types-CaS-TM-K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-886amtI8.js";import"./symbol-BehYzhqn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcHwamEz.js";import"./uniqBy-BPDtNAS2.js";import"./iteratee-DKkbZcMa.js";import"./useAnimationId-Bstcgfr3.js";import"./Cross-CAFBXUU8.js";import"./Rectangle-DcCVFLvW.js";import"./util-Dxo8gN5i.js";import"./Sector-D3hQT5GS.js";import"./activeStyles-DBmoV7wT.js";import"./dataEntryStyles-Cvogs2XX.js";import"./ActivePoints-fNvRWKnn.js";import"./Dot-FtP_Pc_K.js";import"./ErrorBarContext-Dxzs7LXM.js";import"./GraphicalItemClipPath-C4RVkUJq.js";import"./SetGraphicalItem-DcIBNzJU.js";import"./getRadiusAndStrokeWidthFromDot-CVKuJNBK.js";import"./ActiveShapeUtils-TTXriytS.js";import"./useGraphicalItemIdentity-D9IvhHId.js";import"./step-BxjwmJ_I.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
