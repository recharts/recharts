import{R as t}from"./iframe-CBRSMBnf.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-DSUkkbnx.js";import{R as h}from"./zIndexSlice-G_MKhK64.js";import{L as A}from"./LineChart-Cltz-ya_.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-D7MRB-1A.js";import{X as f}from"./XAxis-hFmUjMoe.js";import{L as E}from"./Legend-qD3Pkinv.js";import{L as i}from"./Line-BwqfHSpg.js";import{T as v}from"./Tooltip-iX0f_CtC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BfZk-Sdf.js";import"./Text-DWGdTCGH.js";import"./resolveDefaultProps-rMq54uQA.js";import"./ZIndexLayer-BCt1x8VL.js";import"./index-BFSKO-j2.js";import"./index-Dr6qgTGt.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CmG6JvL9.js";import"./throttle-9ZU0NYV2.js";import"./axisSelectors-Ca58SJJZ.js";import"./d3-scale-YF59ukCY.js";import"./CartesianAxis-BvwIwDWJ.js";import"./Layer-aUkXnOjv.js";import"./types-BEawq_c0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dn7AqsKy.js";import"./index-1te-Kc2Q.js";import"./index-DGSnNf5w.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CtIo7IeI.js";import"./index-AkU5pxMr.js";import"./fillDefinitions-1nZ0ZPs-.js";import"./CartesianChart-PQ4f033u.js";import"./chartDataContext-sCDQ5wEf.js";import"./CategoricalChart-BElxArO-.js";import"./Symbols-CQ03YMrb.js";import"./symbol-DcOuNSJt.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DQ69DYSZ.js";import"./uniqBy-D0KCbpsR.js";import"./iteratee-Bc1Rf-mx.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-ZvZ8EJkG.js";import"./Curve--RPaNs4h.js";import"./step-DBVTJVz7.js";import"./dataEntryStyles-CAxQKe3A.js";import"./ActivePoints-DpAEo5pc.js";import"./Dot-Cui8UCyf.js";import"./activeStyles-DpG6wBQs.js";import"./useAnimationId-cL_ennFP.js";import"./ErrorBarContext-D6qhDPP-.js";import"./SetGraphicalItem-C5CBQIUL.js";import"./ActiveShapeUtils-DgOfPYb9.js";import"./useEffectiveDataKey-CyhT1JOs.js";import"./Cross-CA-QcL5M.js";import"./Rectangle-J9wv2qAO.js";import"./util-Dxo8gN5i.js";import"./Sector-3uuoL5-I.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
