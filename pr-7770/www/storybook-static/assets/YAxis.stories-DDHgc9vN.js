import{R as t}from"./iframe-JwbLQPb2.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CMNQVrMb.js";import{R as h}from"./zIndexSlice-BvSjVeUr.js";import{L as A}from"./LineChart-CyWgZ_3C.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-ChdA-PG8.js";import{X as f}from"./XAxis-CM1shXvI.js";import{L as E}from"./Legend-D2QrjC31.js";import{L as i}from"./Line-7JNP1HYC.js";import{T as v}from"./Tooltip-ggRRLF2Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C9oG4jkb.js";import"./Text-DYIo7N8x.js";import"./resolveDefaultProps-CSG7eI7r.js";import"./DOMUtils-CGRWukjT.js";import"./isWellBehavedNumber-CdOzsQhH.js";import"./useId-CU2vxgfb.js";import"./useBackwardsCompatibleTheme-2v1_sDmp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B1cjmDJz.js";import"./index-BTc1OfE8.js";import"./index-CKs_88Jr.js";import"./RechartsWrapper-CHoC0Tmg.js";import"./axisSelectors-Bl-g05pj.js";import"./throttle-CQOjkZLn.js";import"./d3-scale-C8sQoAOm.js";import"./index-CV_Eti3m.js";import"./index-Ct1SgceM.js";import"./renderedTicksSlice-f-Q9YZ5S.js";import"./index-B_caUHn5.js";import"./CartesianAxis-DEricmMP.js";import"./Layer-BUVs9FF0.js";import"./types-BXkOLLZ5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CVn5EGJv.js";import"./chartDataContext-CoYu6TUB.js";import"./CategoricalChart-Cxecmsq9.js";import"./Symbols-Cchs_XVF.js";import"./symbol-Q_pfoSEH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BYV602LJ.js";import"./uniqBy-DWoTTWdi.js";import"./iteratee-DxP2qSYe.js";import"./Curve-v4EbeP27.js";import"./step-8eqj28j5.js";import"./AnimatedItems-Di0vnHT_.js";import"./useAnimationId-DNb0w9mF.js";import"./ActivePoints-Zw5Cgcy4.js";import"./Dot-BOts6I9w.js";import"./RegisterGraphicalItemId-JHnI7J5m.js";import"./ErrorBarContext-DLKn1BJH.js";import"./GraphicalItemClipPath-Btey0t5q.js";import"./SetGraphicalItem-CF8QjFwu.js";import"./getRadiusAndStrokeWidthFromDot-Bmqi90U5.js";import"./ActiveShapeUtils-CZ-yTrkB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-Berlx-JC.js";import"./Rectangle-CfutVei8.js";import"./util-Dxo8gN5i.js";import"./Sector-CkizDHcj.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
