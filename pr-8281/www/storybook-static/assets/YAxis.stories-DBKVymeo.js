import{R as t}from"./iframe-DlCdq56B.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-CiL6lsrt.js";import{R as h}from"./zIndexSlice-AxtVyY3Z.js";import{L as A}from"./LineChart-G-vwRpsZ.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BP1wFMOe.js";import{X as f}from"./XAxis-BSv-cfqy.js";import{L as E}from"./Legend-C0cyFPQv.js";import{L as i}from"./Line-CG_-O_No.js";import{T as v}from"./Tooltip-jQliVFVi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DhxtC2yH.js";import"./Text-DCVc9tCi.js";import"./resolveDefaultProps-BUW76FaL.js";import"./ZIndexLayer-DoM1zDnE.js";import"./index-DRrdDGzH.js";import"./index-D0nmcM1A.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B-SnaQvT.js";import"./throttle-DEcvUi6F.js";import"./axisSelectors-CSfGPpIK.js";import"./d3-scale-3Jo-Yey1.js";import"./CartesianAxis-gaRy0kAT.js";import"./Layer-DYaOGPQe.js";import"./types-CGD2CGOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xGoci0dc.js";import"./index-Dl9VO4In.js";import"./index-CPJJsZF5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-fp3cwEAp.js";import"./index-CVrMJXNG.js";import"./fillDefinitions-P9YSjlZq.js";import"./CartesianChart-DAQanSbx.js";import"./chartDataContext-BiLGYApi.js";import"./CategoricalChart-DEbdQdFq.js";import"./Symbols-Dqo2PD8d.js";import"./symbol-BfVO91QA.js";import"./path-BBMZd4YL.js";import"./useElementOffset-D9xfe4ty.js";import"./uniqBy-7nQNTfGC.js";import"./iteratee-D1UWDese.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-9hVd_OrB.js";import"./Curve-lp641HWe.js";import"./step-DukoPJ0d.js";import"./dataEntryStyles-BQcljHLn.js";import"./ActivePoints-Ve_riuMJ.js";import"./Dot-B5biZeEa.js";import"./activeStyles-WuCpdruK.js";import"./useAnimationId-DvgYyN8a.js";import"./ErrorBarContext-C53AQX2l.js";import"./SetGraphicalItem-DVkPEJIv.js";import"./ActiveShapeUtils-BhCU4_aJ.js";import"./useEffectiveDataKey-dLwdu-vi.js";import"./Cross-Clk77yjw.js";import"./Rectangle-Bks-uWZg.js";import"./util-Dxo8gN5i.js";import"./Sector-CiLnt5Zg.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,jt as __namedExportsOrder,Ot as default};
