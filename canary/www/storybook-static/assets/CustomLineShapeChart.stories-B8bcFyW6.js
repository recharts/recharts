import{e as t}from"./iframe-C2QqRKe7.js";import{R as D,i as s}from"./arrayEqualityCheck-PWQDmerQ.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-MCjZjX5K.js";import{C as K}from"./CartesianGrid-D-1j0FVM.js";import{X as T}from"./XAxis-DNcvFPfK.js";import{Y as M}from"./YAxis-21rUvSzF.js";import{L as $}from"./Legend-ClNQMLK0.js";import{T as O}from"./Tooltip-B0rpxfs0.js";import{L as C}from"./Line-Bg3EL3qc.js";import{R as W}from"./RechartsHookInspector-CgITLFRP.js";import{C as X}from"./Curve-CBR7IDRo.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-7LXz8kjz.js";import"./immer-CHIvT254.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-uOO6_n61.js";import"./index-rLwxE0hv.js";import"./hooks-mESitlr_.js";import"./axisSelectors-BKaUJCrd.js";import"./d3-scale-dRIxyhfO.js";import"./zIndexSlice-BpAhelXi.js";import"./renderedTicksSlice-psJG_LWq.js";import"./CartesianChart-_z898-at.js";import"./chartDataContext-Cua8pUoe.js";import"./CategoricalChart-DTUutzp0.js";import"./CartesianAxis-se2SzLtu.js";import"./Layer-DCLj2Osy.js";import"./Text-DIlIMQQ1.js";import"./DOMUtils-9UeuBFxq.js";import"./Label-s7jamoYW.js";import"./ZIndexLayer-DIR-sv8W.js";import"./types-DlfTkI4e.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B81oQNtv.js";import"./symbol-CnCwPTjr.js";import"./step--bjVkvqq.js";import"./useElementOffset-BzleAjZ-.js";import"./uniqBy-CS1JI9OO.js";import"./iteratee-G7IUGyAd.js";import"./useAnimationId-Bi88RhdV.js";import"./Cross-4gLCtwOQ.js";import"./Rectangle-BOyb4uG2.js";import"./Sector-BVmDGxYU.js";import"./ReactUtils-D05HJqIj.js";import"./ActivePoints-DEfaZ0g5.js";import"./Dot-CoSgEVxE.js";import"./RegisterGraphicalItemId-j0z2KBnl.js";import"./ErrorBarContext-C3fSByYS.js";import"./GraphicalItemClipPath-IOucdNEs.js";import"./SetGraphicalItem-C5oBx3dN.js";import"./getRadiusAndStrokeWidthFromDot-BGZ245Ii.js";import"./ActiveShapeUtils-CkOZGg75.js";import"./isPlainObject-DLKiFJlX.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-Dk1NLMTJ.js";import"./index-BnZqoCYA.js";import"./ChartSizeDimensions-BWtVWwLO.js";import"./OffsetShower-BY6uYDHq.js";import"./PlotAreaShower-DlAzy3wu.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
