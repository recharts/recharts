import{e as t}from"./iframe-CsXVB2ZJ.js";import{R as D,i as s}from"./arrayEqualityCheck-BCHdTh97.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-KQSX-aqA.js";import{C as K}from"./CartesianGrid-CHNGn_jU.js";import{X as T}from"./XAxis-B7CspB_5.js";import{Y as M}from"./YAxis-CG9kcCow.js";import{L as $}from"./Legend-BqKC_mMS.js";import{T as O}from"./Tooltip-CpqHLaVy.js";import{L as C}from"./Line-CXPOtBvj.js";import{R as W}from"./RechartsHookInspector-DPsZ88KI.js";import{C as X}from"./Curve-DWbGncva.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxo_4k9c.js";import"./immer-BTK-YsvV.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsYOQVLv.js";import"./index-DrJPvX0I.js";import"./hooks-D_05cmM9.js";import"./axisSelectors-DotnTkUo.js";import"./d3-scale-COfDs1Hg.js";import"./zIndexSlice-COIrpl7N.js";import"./renderedTicksSlice-BIUh3E5-.js";import"./CartesianChart-D5A6zJYY.js";import"./chartDataContext-U_ALNAnQ.js";import"./CategoricalChart-D25YEStt.js";import"./CartesianAxis-D3FkxlAO.js";import"./Layer-ZxhtGexe.js";import"./Text-t92igXCI.js";import"./DOMUtils-DOi0Kbgg.js";import"./Label-CpKh3CyV.js";import"./ZIndexLayer-kRMHxQSg.js";import"./types-BRXmP5ht.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B41PQ-gK.js";import"./symbol-C0zx-DBl.js";import"./step-Do92eA3g.js";import"./useElementOffset-DWVNtqqj.js";import"./uniqBy-BKF_AGke.js";import"./iteratee-fFXmuyRd.js";import"./useAnimationId-CQeQyoAC.js";import"./Cross-LLewnfb-.js";import"./Rectangle-BziwuLFH.js";import"./Sector-BbnyTQRb.js";import"./ReactUtils-BPsWb6oC.js";import"./ActivePoints-1yQdgBTn.js";import"./Dot-D9036cg4.js";import"./RegisterGraphicalItemId-Bh8wdrii.js";import"./ErrorBarContext-Dh71FriX.js";import"./GraphicalItemClipPath-CHSTcUHY.js";import"./SetGraphicalItem-1mPwySrk.js";import"./getRadiusAndStrokeWidthFromDot-Blz_buNj.js";import"./ActiveShapeUtils-CSysbPr0.js";import"./isPlainObject-C0suLCJu.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-XBp8FK9I.js";import"./index-B4Kp1LJ2.js";import"./ChartSizeDimensions-DnhUms5f.js";import"./OffsetShower-DndIy-Mf.js";import"./PlotAreaShower-BkBHMfKD.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
