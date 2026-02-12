import{e as t}from"./iframe-faEGnlhT.js";import{R as D,n as p}from"./arrayEqualityCheck-C0DmTAi-.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CCahylhV.js";import{C as K}from"./CartesianGrid-CiqXWwez.js";import{X as T}from"./XAxis-CFbqEzYE.js";import{Y as M}from"./YAxis-CcVX3Fvc.js";import{L as $}from"./Legend-BerMHo-4.js";import{T as O}from"./Tooltip-DILGbGVC.js";import{L as C}from"./Line-BKU09TBH.js";import{R as W}from"./RechartsHookInspector-DorgIABE.js";import{C as X}from"./Curve-Digajzg7.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-E1K0A3LW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C18N7NWG.js";import"./hooks-BCFTrc9K.js";import"./axisSelectors-B-QEn76s.js";import"./zIndexSlice-B9CGjDBz.js";import"./CartesianChart-BcS0gbJv.js";import"./chartDataContext--QJQie47.js";import"./CategoricalChart-DS6-A_Eu.js";import"./CartesianAxis-D4ASWqc1.js";import"./Layer-BVbadyP2.js";import"./Text-TFqO-ApL.js";import"./DOMUtils-z-S8PuYj.js";import"./Label-DHVy6qmW.js";import"./ZIndexLayer-Dp_sNRVX.js";import"./types-Bw-NWEAT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-C64BIrkw.js";import"./useElementOffset-CI2OB4g8.js";import"./iteratee-COpg3UGo.js";import"./Cross-HF6www-7.js";import"./Rectangle-DX06SiF4.js";import"./useAnimationId-KEEDc5eO.js";import"./Sector-VklTrsUw.js";import"./ReactUtils-DIvlatZp.js";import"./ActivePoints-DUFMuXwg.js";import"./Dot--Iy9brq0.js";import"./RegisterGraphicalItemId-D75CZCwF.js";import"./ErrorBarContext-BZkVSpWJ.js";import"./GraphicalItemClipPath-Cxy9t3jj.js";import"./SetGraphicalItem-Dla_HDr3.js";import"./getRadiusAndStrokeWidthFromDot-ngsgrZAG.js";import"./ActiveShapeUtils-DBh9LMnt.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BUZP6yXx.js";import"./index-ek5vanJI.js";import"./ChartSizeDimensions-BIBiiHxa.js";import"./OffsetShower-syvld0TV.js";import"./PlotAreaShower-LZVAobRV.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
