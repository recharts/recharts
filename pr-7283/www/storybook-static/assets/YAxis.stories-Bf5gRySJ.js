import{e as t}from"./iframe-Duu2ePP2.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-DKXddmVj.js";import{R as h}from"./arrayEqualityCheck-B-cAi4kL.js";import{L as A}from"./LineChart-CMjtada3.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-BX2etGZS.js";import{X as x}from"./XAxis-DAA3n7LQ.js";import{L as E}from"./Legend-smB8ffG_.js";import{L as n}from"./Line-Dbauye43.js";import{T as v}from"./Tooltip-UcqDBdJL.js";import{R as k}from"./RechartsHookInspector-Bh1VcSAj.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-0Lljxc4r.js";import"./Layer-BOJMxATb.js";import"./resolveDefaultProps-BWiIM3v1.js";import"./Text-Cd4yjmCr.js";import"./DOMUtils-3aQ33ho0.js";import"./Label-Bn1yjK4M.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJKI90nF.js";import"./zIndexSlice-DggUfY4w.js";import"./immer-ON4fWNwQ.js";import"./types-DgKzbqf0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Dokw_GUk.js";import"./hooks-dkH0FbaO.js";import"./axisSelectors-RH6y-AiZ.js";import"./d3-scale-yxZwMUWq.js";import"./RechartsWrapper-DeZsisyl.js";import"./index-BGitJN2W.js";import"./CartesianChart-D1uig-eX.js";import"./chartDataContext-Z4x7BNXW.js";import"./CategoricalChart-7RYTnCI7.js";import"./Symbols-BvwbX7uA.js";import"./symbol-BIpvV-Z0.js";import"./step-CeBqx2xf.js";import"./useElementOffset-DbwX6Ink.js";import"./uniqBy-C2SKejLS.js";import"./iteratee-BIM71ygM.js";import"./ReactUtils-4qgrEQeH.js";import"./ActivePoints-DBsGuqVa.js";import"./Dot-BT4SKcl1.js";import"./RegisterGraphicalItemId-CR36P_VL.js";import"./ErrorBarContext-q9vP8J6E.js";import"./GraphicalItemClipPath-Bnp8k_2K.js";import"./SetGraphicalItem-BK48IdmH.js";import"./useAnimationId-B0y91bCS.js";import"./getRadiusAndStrokeWidthFromDot-BA08heCI.js";import"./ActiveShapeUtils-rsSi-jmT.js";import"./isPlainObject-YfZdirFW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CChRXwuW.js";import"./Trapezoid-CfCidBHT.js";import"./Sector-Bqlpq4fQ.js";import"./Curve-C4aJqTD7.js";import"./Cross-BQ1wysmF.js";import"./index-B2k1iAec.js";import"./ChartSizeDimensions-D23mYDM8.js";import"./OffsetShower-CUyO8TZe.js";import"./PlotAreaShower-C6jDjqIX.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
