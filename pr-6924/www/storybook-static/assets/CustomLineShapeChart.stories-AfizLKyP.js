import{e as t}from"./iframe-BMCIaxKG.js";import{R as D,n as p}from"./arrayEqualityCheck--GVOH9-X.js";import{L as v}from"./LineChartArgs-BZ5q81WN.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-DTsyshxn.js";import{C as K}from"./CartesianGrid-DT41IuTf.js";import{X as T}from"./XAxis-CQh89uUR.js";import{Y as M}from"./YAxis-DfmH9Dom.js";import{L as $}from"./Legend-DFnGiCNO.js";import{T as O}from"./Tooltip-CGifnB1H.js";import{L as C}from"./Line-BYSysfKB.js";import{R as W}from"./RechartsHookInspector-BEE5VJHB.js";import{C as X}from"./Curve-B-WNVokC.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DYzg8zSB.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-Bb1gDQXi.js";import"./hooks-DebnH94a.js";import"./axisSelectors-cgl3VJbu.js";import"./zIndexSlice-B9Z5B7ke.js";import"./CartesianChart-B-ZCTtvW.js";import"./chartDataContext-oBen9I8F.js";import"./CategoricalChart-epx7zaIT.js";import"./CartesianAxis-BYfW_8DA.js";import"./Layer-MWXbZbYh.js";import"./Text-C3pNOBoN.js";import"./DOMUtils-Bqla5JdC.js";import"./Label-DX5r6J7L.js";import"./ZIndexLayer-D3DglK0F.js";import"./types-CjLOz-vL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DwSHOnga.js";import"./useElementOffset-CqP1o4V0.js";import"./iteratee-C2T4gNsh.js";import"./Cross-CMeEtOq-.js";import"./Rectangle-B1cropaK.js";import"./useAnimationId-BmU-cqjD.js";import"./Sector-DluXzhdl.js";import"./ReactUtils-5tDB8KCJ.js";import"./ActivePoints-3VFSNx0Z.js";import"./Dot-Bk1pRUj2.js";import"./RegisterGraphicalItemId-oN7HBHom.js";import"./ErrorBarContext-KqD_eRKg.js";import"./GraphicalItemClipPath-B2ari5YW.js";import"./SetGraphicalItem-CcB6KXss.js";import"./getRadiusAndStrokeWidthFromDot-BdARBz_p.js";import"./ActiveShapeUtils-DtnCQ-cg.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CAvOGSEj.js";import"./index-a6yAW-au.js";import"./ChartSizeDimensions-B-pVWfha.js";import"./OffsetShower--s29U8Jg.js";import"./PlotAreaShower-CsN0ehbx.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
