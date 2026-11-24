import{R as t}from"./iframe-DFEJf-6F.js";import{R as D,l as p}from"./zIndexSlice-Bh4qmv0V.js";import{L as v}from"./LineChartArgs-C6kzjQAk.js";import{g as K}from"./utils-ePvtT4un.js";import{p as T}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-CSdnMU1v.js";import{C as M}from"./CartesianGrid-CgXUJVIP.js";import{X as $}from"./XAxis-DQsdb669.js";import{Y as I}from"./YAxis-Cx2H2wIk.js";import{L as O}from"./Legend-T4wJplzd.js";import{T as W}from"./Tooltip-fS_bZ-yd.js";import{L as f}from"./Line-CoLcqSgq.js";import{C as X}from"./Curve-CKBXq4VL.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e-IgV90n.js";import"./get-CjriyByo.js";import"./throttle-t_Ovqcxg.js";import"./index-UCW2HZhy.js";import"./index-BocwXP9h.js";import"./RechartsWrapper-CjcGVgxW.js";import"./axisSelectors-mOjibS9Y.js";import"./polarAxisSelectors-Bm_q4tEf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-tiUNr7pP.js";import"./index-CuX-9nTc.js";import"./index-BaTm8cby.js";import"./renderedTicksSlice-CyR8q6N_.js";import"./index-B-weJfXM.js";import"./fillDefinitions-CQ2sIcKf.js";import"./CartesianChart-Dsv7MZH7.js";import"./chartDataContext-DG3vMJ0c.js";import"./CategoricalChart-BE4FjrpO.js";import"./CartesianAxis-DcDhI6Zy.js";import"./Layer-BocGZ-Qs.js";import"./Text-kTUl7smJ.js";import"./ZIndexLayer-DicbFK_2.js";import"./Label-DJktLpOl.js";import"./types-BDYL0NFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Bto4wFMn.js";import"./symbol-CxF-LE8W.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BWm_b5s0.js";import"./uniqBy-CV4gXzpe.js";import"./iteratee-WJSBnlLa.js";import"./isArguments-yB-y1yaH.js";import"./useAnimationId-CO4-0stH.js";import"./Cross-Dv1-Z6ov.js";import"./Rectangle-DkydH7xZ.js";import"./util-Dxo8gN5i.js";import"./Sector-BYQ9JvD_.js";import"./getRadiusAndStrokeWidthFromDot-BBakNZKq.js";import"./dataEntryStyles-3agXA2tK.js";import"./ActivePoints-Bn0_DXo_.js";import"./Dot-3vV8DYVs.js";import"./activeStyles-DE7rNFoN.js";import"./ErrorBarContext-BaUlHsru.js";import"./SetGraphicalItem-BSkWbVqw.js";import"./ActiveShapeUtils-YveQ6HiU.js";import"./useEffectiveDataKey-Don9Yvym.js";import"./step-BD0nB0zO.js";const zt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let i=1,S=m.length;i<S;++i){let b=0;const r=m[i-1],a=m[i];if(p(r.x)&&p(r.y)&&p(a.x)&&p(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let n=h/2,{x:y,y:C}=r;for(;e-n>0;)e-=n,y+=g*n,C+=u*n,d.push(t.createElement("g",{key:`${i}-${++b}`,transform:`translate(${y} ${C}) rotate(${w})`},o)),n=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},s={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(f,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(f,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...K(v),width:500,height:300,data:T,margin:{top:5,right:30,left:20,bottom:5}}},Ht=["CustomLineShapeChart"];var L,x,E;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{s as CustomLineShapeChart,Ht as __namedExportsOrder,zt as default};
