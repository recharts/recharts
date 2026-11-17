import{R as t}from"./iframe-DQIHw-Vj.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-BRNNX1VG.js";import{R as h}from"./zIndexSlice-DLnqMvRR.js";import{L as A}from"./LineChart-D2R6omtm.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DAgIamEO.js";import{X as f}from"./XAxis-C1j7r1zg.js";import{L as E}from"./Legend-CK1IssTU.js";import{L as i}from"./Line-CwKp4y3S.js";import{T as v}from"./Tooltip-hF8WqyNy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CDOIzumT.js";import"./Text-UFCPlRdh.js";import"./resolveDefaultProps-DCDPXacx.js";import"./ZIndexLayer-cKbXtIsu.js";import"./index-ddMf2qZl.js";import"./index-DvzJj3QK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CO8YfrX5.js";import"./throttle-CsL6-oT8.js";import"./axisSelectors-BOWof0F_.js";import"./d3-scale-D3QDia2a.js";import"./CartesianAxis-uR_V8Oxl.js";import"./Layer-Dtg1l4X7.js";import"./types-DC02XBeR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DWNRUwtc.js";import"./index-CAKt4SRE.js";import"./index-ej37J0iC.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BOwBRf5q.js";import"./index-DdSRFntK.js";import"./fillDefinitions-T89P4CC8.js";import"./CartesianChart-e9rrIYqD.js";import"./chartDataContext-D7ij0_Rh.js";import"./CategoricalChart-DgxyBa1d.js";import"./Symbols-Derc8Zbt.js";import"./symbol-DHOCB5wG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-UoXHul.js";import"./uniqBy-DLWeu4D6.js";import"./iteratee-BZDFIkpf.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BtNwq4SW.js";import"./Curve-BGOWFPUa.js";import"./step-WCAmzMpM.js";import"./dataEntryStyles-CRT7gJOj.js";import"./ActivePoints-fySHDRUR.js";import"./Dot-so438WjJ.js";import"./activeStyles-DlG12Hxm.js";import"./useAnimationId-BGqCxB5a.js";import"./ErrorBarContext-DeOd0WHi.js";import"./SetGraphicalItem-xxOWq2oE.js";import"./ActiveShapeUtils-sNC7IbT4.js";import"./useEffectiveDataKey-DXNQs5X4.js";import"./Cross-DpX9ppW_.js";import"./Rectangle-Bd8I5Mu8.js";import"./util-Dxo8gN5i.js";import"./Sector-BQCU8Weg.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
