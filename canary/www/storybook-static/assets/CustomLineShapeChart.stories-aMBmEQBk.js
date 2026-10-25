import{R as t}from"./iframe-aKV-O9MJ.js";import{a as p}from"./isWellBehavedNumber-DhfM3JhV.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CdLqC4pi.js";import{R as T}from"./zIndexSlice-BKaqyajB.js";import{C as M}from"./CartesianGrid-BOcFWEp4.js";import{X as $}from"./XAxis-lhBNyzg_.js";import{Y as I}from"./YAxis-Ch3CqHid.js";import{L as O}from"./Legend-B_eYmoQf.js";import{T as W}from"./Tooltip-DRM63UrI.js";import{L as C}from"./Line-Cnh90x2U.js";import{C as X}from"./Curve-3H4HQJme.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-HqSLYtX8.js";import"./RechartsWrapper-CMYKJCfZ.js";import"./axisSelectors-MbFPBavU.js";import"./throttle-Be3j2pw2.js";import"./index-CgdfyZHj.js";import"./index-CpNUBple.js";import"./d3-scale-CsyBOG8O.js";import"./index-D1DeZs1S.js";import"./index-HoQ8qajG.js";import"./renderedTicksSlice-WTymoNbk.js";import"./index-C12TwcvC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C2vgDwW7.js";import"./chartDataContext-DB9-FPl4.js";import"./CategoricalChart-CDZMqsPI.js";import"./CartesianAxis-Dm5On8Gk.js";import"./Layer-07gJ6FIr.js";import"./Text-CopK1C24.js";import"./pageBackground-D0AIP4to.js";import"./useId-CnmqgkQl.js";import"./useBackwardsCompatibleTheme-w5mekw_9.js";import"./Label-zwi5-GQg.js";import"./ZIndexLayer-A9-ipKwv.js";import"./dataEntryStyles-BzKYf-di.js";import"./types-DTpzWv6l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Dqx3Vy8L.js";import"./symbol-D9UJ3By9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BKf5VsK_.js";import"./uniqBy-BTRGg67Z.js";import"./iteratee-BvKBaWIX.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-Cb-3p2b2.js";import"./Cross-DrnR6mil.js";import"./Rectangle-Bpv-EdUE.js";import"./util-Dxo8gN5i.js";import"./Sector-CizdX0d-.js";import"./activeStyles-BvRJtjMn.js";import"./ActivePoints-DBGJodJk.js";import"./Dot-0Wdau4CC.js";import"./RegisterGraphicalItemId-CFnb1OFM.js";import"./ErrorBarContext-Bqn6HxNU.js";import"./SetGraphicalItem-BtHSeMoh.js";import"./getRadiusAndStrokeWidthFromDot-B6-r-w_v.js";import"./ActiveShapeUtils-CDtOvQ0I.js";import"./useEffectiveDataKey-B3-MKjEu.js";import"./step-Bv994rc2.js";const Qt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Ut=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ut as __namedExportsOrder,Qt as default};
