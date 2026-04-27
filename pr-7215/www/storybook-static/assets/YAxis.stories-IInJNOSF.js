import{e as t}from"./iframe-Qs6O8wpy.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-C1EP92fD.js";import{R as h}from"./arrayEqualityCheck-DiPmtVsh.js";import{L as A}from"./LineChart-ZtVWuRdh.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-BIuqubvM.js";import{X as x}from"./XAxis-B5r0d-Gb.js";import{L as E}from"./Legend-DcdmhQ06.js";import{L as n}from"./Line-BBeciYnn.js";import{T as v}from"./Tooltip-Bp0Bo3zm.js";import{R as k}from"./RechartsHookInspector-D6-uk_4z.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BvKnbhLV.js";import"./Layer-CICKsHec.js";import"./resolveDefaultProps-DkvZoiFw.js";import"./Text-DQ28Uic0.js";import"./DOMUtils-C3QfuTRj.js";import"./Label-DJKNn60w.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dzi2jwDH.js";import"./zIndexSlice-BdRBx_3M.js";import"./immer-BUNCc4EX.js";import"./types-Cs32UOA0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Si7G1rdh.js";import"./hooks-C6T0ux6I.js";import"./axisSelectors-BqhGWF7A.js";import"./d3-scale-C7QcSE0p.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-DXH9h8qa.js";import"./index-BLhY0zjE.js";import"./CartesianChart-CZ-ONe5U.js";import"./chartDataContext-Dx6fqFLh.js";import"./CategoricalChart-D7dhNxwj.js";import"./Symbols-B1g8PGM_.js";import"./symbol-DP01-Acw.js";import"./step-6wxOI7IM.js";import"./useElementOffset-CF7P1hcV.js";import"./uniqBy-BKY48JQd.js";import"./iteratee-CVgA4_T5.js";import"./Curve-uoVbw7SZ.js";import"./AnimatedItems-Bmk-Vn6E.js";import"./useAnimationId-Bx8YWNYj.js";import"./ActivePoints-DlYWl3uo.js";import"./Dot-Ck8_T0Z-.js";import"./RegisterGraphicalItemId-D_GbpICU.js";import"./ErrorBarContext-DiylhWX0.js";import"./GraphicalItemClipPath-97GOlLPd.js";import"./SetGraphicalItem-CPtdCQ7b.js";import"./getRadiusAndStrokeWidthFromDot-DBGot3sv.js";import"./ActiveShapeUtils--dL8_NPS.js";import"./isPlainObject-CN0NSOTq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bukdiqfq.js";import"./Trapezoid-CT6ZG2gE.js";import"./Sector-ByAF8mSb.js";import"./Cross-CQFdEXLw.js";import"./index-COAE6_R9.js";import"./ChartSizeDimensions-h_Vewza7.js";import"./OffsetShower-Dv7qO3Dx.js";import"./PlotAreaShower-CTCwIg18.js";const Mt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Xt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
