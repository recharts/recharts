import{e as t}from"./iframe-C9RdRDH3.js";import{R as D,i as s}from"./arrayEqualityCheck-HNNWYF-c.js";import{L as v}from"./LineChartArgs-E1uHAgXQ.js";import{g as I}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-jGPF58LI.js";import{C as T}from"./CartesianGrid-lcSY4Olk.js";import{X as M}from"./XAxis-zBRK63wF.js";import{Y as $}from"./YAxis-JD4R_vdV.js";import{L as O}from"./Legend-DIEi59UA.js";import{T as W}from"./Tooltip-hUESGT__.js";import{L as C}from"./Line-hOd9fGN2.js";import{R as X}from"./RechartsHookInspector-CTsDIORN.js";import{C as Y}from"./Curve-j2GFynBi.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-cmmY0qvO.js";import"./immer-Bs-9thuH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BmF3qkQ2.js";import"./index-DVhUM6Av.js";import"./hooks-wHvHG3dE.js";import"./axisSelectors-D6QzvLNM.js";import"./d3-scale-C5VHC7vJ.js";import"./zIndexSlice-BbsfkO0E.js";import"./renderedTicksSlice-BEDhfrBW.js";import"./CartesianChart-CdaihLfO.js";import"./chartDataContext-BYUFQouT.js";import"./CategoricalChart-DNwSkE9v.js";import"./CartesianAxis-B-LYb471.js";import"./Layer-Br4TNC_V.js";import"./Text-wGfDkrTn.js";import"./DOMUtils-Btd4Fsjb.js";import"./Label-nmn7wUcC.js";import"./ZIndexLayer-BHSqW2ug.js";import"./types-zOKv99jr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D5iKcEZY.js";import"./symbol-B9BxRARk.js";import"./step-By0pLWNs.js";import"./useElementOffset-1-iEdSlv.js";import"./uniqBy-Ctz7O3Q0.js";import"./iteratee-CqWD3rtL.js";import"./useAnimationId-Dkvf8CAV.js";import"./Cross-BAMZzrR9.js";import"./Rectangle-D2WqxHR4.js";import"./Sector-Dlz-xsu0.js";import"./ReactUtils-BodNcXDX.js";import"./ActivePoints-DehllWrE.js";import"./Dot-D09_z6XC.js";import"./RegisterGraphicalItemId-lJJ2Llx7.js";import"./ErrorBarContext-Df_rxzkL.js";import"./GraphicalItemClipPath-BaxGUmwM.js";import"./SetGraphicalItem-OEoYsD-F.js";import"./getRadiusAndStrokeWidthFromDot-B5vJvzV2.js";import"./ActiveShapeUtils-CdfDZypJ.js";import"./isPlainObject-BkahSEKD.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CaO4Za9k.js";import"./index-iNo1MV8G.js";import"./ChartSizeDimensions-BfBAtZfD.js";import"./OffsetShower-DGVkIb09.js";import"./PlotAreaShower-DbkHyMR-.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(Y,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(T,{strokeDasharray:"3 3"}),t.createElement(M,{dataKey:"name"}),t.createElement($,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(X,null))),args:{...I(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
