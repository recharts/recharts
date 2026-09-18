import{R as t}from"./iframe-hd_pfHvo.js";import{a as p}from"./isWellBehavedNumber-C1tuJPSP.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-C4wWGeYh.js";import{R as T}from"./zIndexSlice-Dp2BKzs8.js";import{C as M}from"./CartesianGrid-CjQhUT8W.js";import{X as $}from"./XAxis-DIhH_NdP.js";import{Y as I}from"./YAxis-Bfby8-tG.js";import{L as O}from"./Legend-C27DvpnH.js";import{T as W}from"./Tooltip-CNZscDqQ.js";import{L as C}from"./Line-C_JAgIax.js";import{C as X}from"./Curve-MYVJeGQI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-drD7xYIQ.js";import"./RechartsWrapper-CyksNjdk.js";import"./axisSelectors-eHIx7hMS.js";import"./throttle-C2q4COo1.js";import"./index-v0QewD8A.js";import"./index-SCBhOffb.js";import"./d3-scale-CciOkO_z.js";import"./index-C3NZEEPx.js";import"./index-Dl1k2Uag.js";import"./renderedTicksSlice-CD7ArbZx.js";import"./index-zFom7GTd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-lsa6cjfM.js";import"./chartDataContext-BzYnwGm5.js";import"./CategoricalChart-DK0H-Nig.js";import"./CartesianAxis-Bczd13d5.js";import"./Layer-egOiXfr6.js";import"./Text-C6732HHA.js";import"./DOMUtils-B5fqbFU1.js";import"./useId-_Yta7G-c.js";import"./useBackwardsCompatibleTheme-SiYIdPDZ.js";import"./Label-DeYie9Lh.js";import"./ZIndexLayer-BHjO29Bs.js";import"./types-B1tRcN2v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CB0dVqBg.js";import"./symbol-7gumIrmR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bjp7QiHs.js";import"./uniqBy-4GbLHGYo.js";import"./iteratee-BHWq50Tg.js";import"./useAnimationId-D0lfWmyy.js";import"./Cross-DdXKijQJ.js";import"./Rectangle-DOvVk1du.js";import"./util-Dxo8gN5i.js";import"./Sector-CFinmXte.js";import"./AnimatedItems-DCH1YBa_.js";import"./ActivePoints-DqLOTWDO.js";import"./Dot-D7no8cFh.js";import"./RegisterGraphicalItemId-_fhB3pIC.js";import"./ErrorBarContext-BU3wkqbx.js";import"./GraphicalItemClipPath-Bsg-Zi-D.js";import"./SetGraphicalItem-CYmPmGcd.js";import"./getRadiusAndStrokeWidthFromDot-BcIv-0gg.js";import"./ActiveShapeUtils-BDpXGuZx.js";import"./useGraphicalItemIdentity-hHj77cNE.js";import"./step-C33N2LGT.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
