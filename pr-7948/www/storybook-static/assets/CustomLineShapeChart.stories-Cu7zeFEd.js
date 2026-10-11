import{R as t}from"./iframe-B5nqGCFx.js";import{a as p}from"./isWellBehavedNumber-CTlIu6VQ.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-DmcWbqPZ.js";import{R as T}from"./zIndexSlice-fA6rJzVB.js";import{C as M}from"./CartesianGrid-C57lX0yd.js";import{X as $}from"./XAxis-BbfaJWKY.js";import{Y as I}from"./YAxis-BgoYMJlL.js";import{L as O}from"./Legend-DbTPlpw_.js";import{T as W}from"./Tooltip-BcK9JY4b.js";import{L as C}from"./Line-rcGSoU24.js";import{C as X}from"./Curve-CUMSQUCB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DTwkyIYB.js";import"./RechartsWrapper-Ba7GDCRC.js";import"./axisSelectors-DRuLrEYP.js";import"./throttle-8usPf-nG.js";import"./index-COQrJFEi.js";import"./index-BRJwV6Tu.js";import"./d3-scale-Cvdyq6r4.js";import"./index-D7H2LPLl.js";import"./index-C0uKubiT.js";import"./renderedTicksSlice-D3liRtIY.js";import"./index-DNc7GpB0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Bo-Bdmuv.js";import"./chartDataContext-BLw5SzU5.js";import"./CategoricalChart-BPnw4lhz.js";import"./CartesianAxis-nGdi1wTE.js";import"./Layer-SWDQGPXc.js";import"./Text-D2l9VyZ3.js";import"./pageBackground-Do8lEaLA.js";import"./useId-D5UXkky-.js";import"./useBackwardsCompatibleTheme-DdYC-jFL.js";import"./Label-Dboddtc6.js";import"./ZIndexLayer-udH7BH-f.js";import"./types-CilMbPhc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DHtTH7TJ.js";import"./symbol-daI3B66U.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C7bOm6Io.js";import"./uniqBy-BrQ249xF.js";import"./iteratee-D4GTaDc4.js";import"./useAnimationId-DegqvOnN.js";import"./Cross-DCP6BZuO.js";import"./Rectangle-BlT3bA6g.js";import"./util-Dxo8gN5i.js";import"./Sector-Ch-MSYlU.js";import"./activeStyles-LGVgbHeS.js";import"./dataEntryStyles-CA9fGSl9.js";import"./ActivePoints-BouQ6dSD.js";import"./Dot-CdI0Le8G.js";import"./ErrorBarContext-BKhVL6zW.js";import"./GraphicalItemClipPath-RjRlios3.js";import"./SetGraphicalItem-B1zewZJg.js";import"./getRadiusAndStrokeWidthFromDot-CpJam9J5.js";import"./ActiveShapeUtils-BaXicK3x.js";import"./useGraphicalItemIdentity-C3gqRS6g.js";import"./step-Bc1udJt4.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:f}=r;for(;e-n>0;)e-=n,y+=g*n,f+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}},Qt=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
