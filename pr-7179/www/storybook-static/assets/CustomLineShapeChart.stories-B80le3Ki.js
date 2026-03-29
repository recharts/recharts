import{e as t}from"./iframe-DqE0HhDh.js";import{R as D,i as s}from"./arrayEqualityCheck-BhYj9TRB.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DNBEZuxS.js";import{C as K}from"./CartesianGrid-DoUWc-aJ.js";import{X as T}from"./XAxis-C0xiJ-tU.js";import{Y as M}from"./YAxis-CxtIp3Fv.js";import{L as $}from"./Legend-Do23JioW.js";import{T as O}from"./Tooltip-C_1Dx6-u.js";import{L as C}from"./Line-CRKf7T1y.js";import{R as W}from"./RechartsHookInspector-euBm-j1Q.js";import{C as X}from"./Curve-DSraN8-A.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B0zUW797.js";import"./immer-DaO_pvPG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-HEjAodTD.js";import"./index-CKBMJiTG.js";import"./hooks-yD69KcYZ.js";import"./axisSelectors-DBPKow-C.js";import"./d3-scale-BFk6iKoW.js";import"./zIndexSlice-VVzaKraz.js";import"./renderedTicksSlice-DXSpE_fB.js";import"./CartesianChart-yHIHv3q8.js";import"./chartDataContext-Bc6WqcUu.js";import"./CategoricalChart-CIvi1KrP.js";import"./CartesianAxis-BflK07ha.js";import"./Layer-DVJHVubL.js";import"./Text-BvcQj2uR.js";import"./DOMUtils-Rt6oxOkz.js";import"./Label-BC1NNDJR.js";import"./ZIndexLayer-DiFU3mdL.js";import"./types-DTL0qiru.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-OgGFg2Oe.js";import"./symbol-CIQc0sSb.js";import"./step-Mkfg8JSi.js";import"./useElementOffset-C4e30NNW.js";import"./uniqBy-Dx5kAXH7.js";import"./iteratee-0SVRaIZJ.js";import"./useAnimationId-BH8Y0C-h.js";import"./Cross-dhaybbMX.js";import"./Rectangle-CjxlKMCH.js";import"./Sector-HtnhKewF.js";import"./ReactUtils-D5QixmYd.js";import"./ActivePoints-CSJ_ljSz.js";import"./Dot-KnUtLjFJ.js";import"./RegisterGraphicalItemId-CEsZ-P-v.js";import"./ErrorBarContext-B9B0bG7x.js";import"./GraphicalItemClipPath-iQzHXFpk.js";import"./SetGraphicalItem-BjVOdg4M.js";import"./getRadiusAndStrokeWidthFromDot-CIcwAwcp.js";import"./ActiveShapeUtils-DeEcXvYf.js";import"./isPlainObject-ClSQ8ayO.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BrfeAX72.js";import"./index-BN77NN_W.js";import"./ChartSizeDimensions-DB_WkeO6.js";import"./OffsetShower-D_wBefSQ.js";import"./PlotAreaShower-CX6NyhGu.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
