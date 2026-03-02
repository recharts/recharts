import{e as t}from"./iframe-iwEL6Umv.js";import{R as D,i as s}from"./arrayEqualityCheck-BhZQM3Cp.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-kahSVJaW.js";import{C as K}from"./CartesianGrid-BBwa0t5D.js";import{X as T}from"./XAxis-Dgqn4iEv.js";import{Y as M}from"./YAxis-umZBaGOr.js";import{L as $}from"./Legend-ClZYW9UT.js";import{T as O}from"./Tooltip-qaBxv0ZM.js";import{L as C}from"./Line-BcSBVIXo.js";import{R as W}from"./RechartsHookInspector-CYTcWIXs.js";import{C as X}from"./Curve-_1pLvIld.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BCVuQ-Yr.js";import"./immer-Cr1rPGS6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-9n0f-4bA.js";import"./index-DLdiPLRr.js";import"./hooks-BKxqdv6E.js";import"./axisSelectors-OvY2hZ5X.js";import"./d3-scale-DtoPWeCi.js";import"./zIndexSlice-B2mfmoSl.js";import"./renderedTicksSlice-C2RN1S42.js";import"./CartesianChart-awM32UjI.js";import"./chartDataContext-GxGvfaB0.js";import"./CategoricalChart-DS_wxFYH.js";import"./CartesianAxis-BWMGM7_Q.js";import"./Layer-blbwcMF4.js";import"./Text-BGZOUB9S.js";import"./DOMUtils-DAlnAof2.js";import"./Label-D1qeHozD.js";import"./ZIndexLayer--muSGjRM.js";import"./types-CbKx0ZMp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CT2be5W7.js";import"./symbol-Q9vYiwbO.js";import"./step-4pZgFtPk.js";import"./useElementOffset-DNqle7pd.js";import"./uniqBy-B3qdkWVD.js";import"./iteratee-D_7LxRKv.js";import"./useAnimationId-fTTqSava.js";import"./Cross-kcSx-bbP.js";import"./Rectangle-CXew48xc.js";import"./Sector-CvrBUmaX.js";import"./ReactUtils-sQyeAkyW.js";import"./ActivePoints-CCPY0FLb.js";import"./Dot-77XJxXcb.js";import"./RegisterGraphicalItemId-DquoBc_j.js";import"./ErrorBarContext-CgjFOrMU.js";import"./GraphicalItemClipPath-DN8WJV-C.js";import"./SetGraphicalItem-7qCAbAa9.js";import"./getRadiusAndStrokeWidthFromDot-CfubkPAe.js";import"./ActiveShapeUtils-C3Zx6KRY.js";import"./isPlainObject-Ddh5v3It.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CwbjlUlI.js";import"./index-LsQkT41Y.js";import"./ChartSizeDimensions-CbGn3agI.js";import"./OffsetShower-DbewMYJd.js";import"./PlotAreaShower-DJ_CeKT6.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
