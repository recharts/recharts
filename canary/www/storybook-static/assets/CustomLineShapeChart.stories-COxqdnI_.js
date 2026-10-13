import{R as t}from"./iframe-CRWpOW02.js";import{a as p}from"./isWellBehavedNumber-DnvCGmEU.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DhtW8xv5.js";import{R as T}from"./zIndexSlice-BeAe48-I.js";import{C as M}from"./CartesianGrid-C-9gYDrC.js";import{X as $}from"./XAxis-D1dQPR-6.js";import{Y as I}from"./YAxis-DHYidPrE.js";import{L as O}from"./Legend-C2i4SW-6.js";import{T as W}from"./Tooltip-BgvFandc.js";import{L as C}from"./Line-Ci7qyRY8.js";import{C as X}from"./Curve-DSopOTRT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BGJ-s5wM.js";import"./RechartsWrapper-BIU9TwkO.js";import"./axisSelectors-CEaTU0uL.js";import"./throttle-CYPAZ-oY.js";import"./index-CqqjX4mb.js";import"./index-BtZZPVlj.js";import"./d3-scale-d-dAzt7l.js";import"./index-Br2LofN0.js";import"./index-D_MdTA2d.js";import"./renderedTicksSlice-D6XZoNOx.js";import"./index-CqBbZHkF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BKIvGl2K.js";import"./chartDataContext-BIcAjQe6.js";import"./CategoricalChart-DHoPXZtk.js";import"./CartesianAxis-BjJPyt3G.js";import"./Layer-CNbUO4cy.js";import"./Text-159WNhne.js";import"./pageBackground-CeS3kx1x.js";import"./useId-ECIur30B.js";import"./useBackwardsCompatibleTheme-4poegSRB.js";import"./Label-C0mxneHa.js";import"./ZIndexLayer-CE46bnfu.js";import"./types-VHH142lq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DjxJ3Hgq.js";import"./symbol-9pDsxG4i.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B4u2V-V0.js";import"./uniqBy-hsCh7ews.js";import"./iteratee-B8ts1Ce8.js";import"./useAnimationId-D92beKJG.js";import"./Cross-Du1xWbjF.js";import"./Rectangle-5Ov4WxTU.js";import"./util-Dxo8gN5i.js";import"./Sector-WsHTbLWJ.js";import"./activeStyles-qMzt72fn.js";import"./dataEntryStyles-BglHhD-H.js";import"./ActivePoints-CSFa2gcu.js";import"./Dot-CX4mMU05.js";import"./ErrorBarContext-Bq-5TM9D.js";import"./GraphicalItemClipPath-Baz6IWCm.js";import"./SetGraphicalItem-CHlvRlHN.js";import"./getRadiusAndStrokeWidthFromDot-Cla7tf7Y.js";import"./ActiveShapeUtils-CJ3uGwKk.js";import"./useEffectiveDataKey-BpgvrKzX.js";import"./step-VbmBsaRU.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
