import{R as t}from"./iframe-fRQcLAl5.js";import{a as p}from"./isWellBehavedNumber-D73y1wlb.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DMySCMHl.js";import{R as T}from"./zIndexSlice-Dn-AwdFU.js";import{C as M}from"./CartesianGrid-Cm7w7xPd.js";import{X as $}from"./XAxis-YHoN4cJ8.js";import{Y as I}from"./YAxis-B2vH-p_Z.js";import{L as O}from"./Legend-BhFF4tti.js";import{T as W}from"./Tooltip-ByfooWk2.js";import{L as C}from"./Line-DpSpydaT.js";import{C as X}from"./Curve-CS-yaUma.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BSRNeAis.js";import"./RechartsWrapper-UgoWSvvL.js";import"./axisSelectors-BcHvjcBD.js";import"./throttle-D9yJ7HBS.js";import"./index-k5JxmCtc.js";import"./index-DGdlAhFZ.js";import"./d3-scale-DfAPImNq.js";import"./index-CvX2HSRN.js";import"./index-BMhLMrsl.js";import"./renderedTicksSlice-B-odeO7S.js";import"./index-0uuwnO43.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-78VpV4en.js";import"./chartDataContext-DbJ6pwXa.js";import"./CategoricalChart-BOoKbn6G.js";import"./CartesianAxis-KAWGVqFX.js";import"./Layer-CbRW8QEs.js";import"./Text-Cru6BjP5.js";import"./pageBackground-CEHLL-Ei.js";import"./useId-C-HGw4dN.js";import"./useBackwardsCompatibleTheme-BHb08z9X.js";import"./Label-B-GmpToQ.js";import"./ZIndexLayer-Cs8fSrLZ.js";import"./dataEntryStyles-DAJ1H5Ij.js";import"./types-9LI4VHBg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CR7Uf5m5.js";import"./symbol-BJALyMWh.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BrWRK1of.js";import"./uniqBy-CluqMtWA.js";import"./iteratee-CLrT16T3.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-BA218cv-.js";import"./Cross-Cp9Y6JoO.js";import"./Rectangle-DEwZ1key.js";import"./util-Dxo8gN5i.js";import"./Sector-CIORA0ys.js";import"./activeStyles-mU47mh7y.js";import"./ActivePoints-D7vn9lL2.js";import"./Dot-CoF5eEMQ.js";import"./RegisterGraphicalItemId-B0TmU9i7.js";import"./ErrorBarContext-DLnk70v-.js";import"./GraphicalItemClipPath-DvSzn1zw.js";import"./SetGraphicalItem-fs95wN3Y.js";import"./getRadiusAndStrokeWidthFromDot-BW7yBTjT.js";import"./ActiveShapeUtils-DqrHb297.js";import"./useEffectiveDataKey-H8Jal8DL.js";import"./step-CpSFtT8B.js";const Ut={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Vt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Vt as __namedExportsOrder,Ut as default};
