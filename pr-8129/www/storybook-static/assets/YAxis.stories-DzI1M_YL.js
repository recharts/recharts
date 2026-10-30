import{R as t}from"./iframe-UUS7gS8r.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Cy8DgzpK.js";import{R as h}from"./zIndexSlice-DC8Mmyu0.js";import{L as A}from"./LineChart-B3LMmUGV.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BsgU5kr5.js";import{X as f}from"./XAxis-Cy2DOw7O.js";import{L as E}from"./Legend-Cj8r2L5c.js";import{L as i}from"./Line-BhGsVkF7.js";import{T as v}from"./Tooltip-mWxjl5Ag.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cr7fVLhy.js";import"./Text-Dm1h-qE_.js";import"./resolveDefaultProps-CGDCDwfC.js";import"./DOMUtils-dYR_cylo.js";import"./pageBackground-BJvSTYQp.js";import"./ZIndexLayer-CHgyGuEd.js";import"./index-B3bpwb38.js";import"./index-DE7_Lyvr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5ho1KqAt.js";import"./throttle-CgxVsgWn.js";import"./axisSelectors-BhKtxZfo.js";import"./d3-scale-DXJSpI4F.js";import"./CartesianAxis-CqSL8oIY.js";import"./Layer-CAt7TJL2.js";import"./types-CpFwJGls.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-RI1nm7LM.js";import"./index-DlU_WMoq.js";import"./index-BEWOexqM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CpoOBNO8.js";import"./index-w---ZacB.js";import"./CartesianChart-C-KduMFZ.js";import"./ZIndexPortal-DB3Ky3lt.js";import"./CategoricalChart-kgfDSXE6.js";import"./fillDefinitions-TYLf-280.js";import"./Symbols-fRcdzfv5.js";import"./symbol-BFpIpW6Y.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BT8ie4xh.js";import"./uniqBy-pgmiU_pf.js";import"./iteratee-D62UJLHy.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C4dbZ49s.js";import"./step-TKY5Ryld.js";import"./LabelList-BfhKeSlq.js";import"./ActivePoints-CKMzfD8D.js";import"./Dot-CwQJh2C3.js";import"./activeStyles-C25hf-sM.js";import"./useAnimationId-BqxzW97i.js";import"./dataEntryStyles-D0nTu1H4.js";import"./ErrorBarContext-BNmRSNHp.js";import"./SetGraphicalItem-DsTeZeM0.js";import"./getRadiusAndStrokeWidthFromDot-CyVRyLxc.js";import"./ActiveShapeUtils-Df31_mcI.js";import"./useEffectiveDataKey-4NPbYdMg.js";import"./Cross-DteNMS9C.js";import"./Rectangle-lDg8xK2m.js";import"./util-Dxo8gN5i.js";import"./Sector-DISySFjD.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,zt as __namedExportsOrder,Xt as default};
