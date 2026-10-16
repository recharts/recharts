import{R as t}from"./iframe-R8qakbXa.js";import{a as p}from"./isWellBehavedNumber-B09TyYXX.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-R_vEBtgH.js";import{R as T}from"./zIndexSlice-CpW5IUCm.js";import{C as M}from"./CartesianGrid-B-hfSGh5.js";import{X as $}from"./XAxis-C4Jew8Rv.js";import{Y as I}from"./YAxis-ByXOMKUb.js";import{L as O}from"./Legend-DEeC35Lj.js";import{T as W}from"./Tooltip-BCWvkX_I.js";import{L as C}from"./Line-C0UZrz4D.js";import{C as X}from"./Curve-C-kAiHcE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CKR1Qcev.js";import"./RechartsWrapper-ClWcdPE7.js";import"./axisSelectors-DMTHYW2V.js";import"./throttle-B9oD6XZ1.js";import"./index-BFIsGGpk.js";import"./index-igt8webG.js";import"./d3-scale-aDQi0991.js";import"./index-BFytD52I.js";import"./index-CMthufc-.js";import"./renderedTicksSlice-BQVB4poR.js";import"./index-Di16hjPT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-PED4jNlL.js";import"./chartDataContext-BSaHGzuI.js";import"./CategoricalChart-DaUIhj12.js";import"./CartesianAxis-D_UchkJi.js";import"./Layer-CmAPD_t-.js";import"./Text-DWNopLVO.js";import"./pageBackground-C5CyBpzw.js";import"./useId-bPLq3L_8.js";import"./useBackwardsCompatibleTheme-qV0asEjz.js";import"./Label-KdqZDMP0.js";import"./ZIndexLayer-BembMDFS.js";import"./types-D_TtzLi3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BZYEBdz_.js";import"./symbol-Dv-EOB02.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C5Bgs-mL.js";import"./uniqBy-DYQ_KcVA.js";import"./iteratee-CNuCkrqA.js";import"./useAnimationId-CjllIhER.js";import"./Cross-DEeio74d.js";import"./Rectangle-iquA0V0c.js";import"./util-Dxo8gN5i.js";import"./Sector-CKO5Jhj4.js";import"./activeStyles-B3GTJvDM.js";import"./dataEntryStyles-DI0HDDLL.js";import"./ActivePoints-Bp8whF8k.js";import"./Dot-BkoFNCjF.js";import"./ErrorBarContext-0rDV8hpt.js";import"./GraphicalItemClipPath-BVAEKKRa.js";import"./SetGraphicalItem-Bvw8mbwf.js";import"./getRadiusAndStrokeWidthFromDot-CMshxAsh.js";import"./ActiveShapeUtils-D6A65k3S.js";import"./useEffectiveDataKey-DI06uwcg.js";import"./step-BfWCr2W6.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
