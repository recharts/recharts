import{R as t}from"./iframe-DFEJf-6F.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-Cx2H2wIk.js";import{R as h}from"./zIndexSlice-Bh4qmv0V.js";import{L as A}from"./LineChart-CSdnMU1v.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CgXUJVIP.js";import{X as f}from"./XAxis-DQsdb669.js";import{L as E}from"./Legend-T4wJplzd.js";import{L as i}from"./Line-CoLcqSgq.js";import{T as v}from"./Tooltip-fS_bZ-yd.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e-IgV90n.js";import"./get-CjriyByo.js";import"./Label-DJktLpOl.js";import"./Text-kTUl7smJ.js";import"./ZIndexLayer-DicbFK_2.js";import"./index-UCW2HZhy.js";import"./index-BocwXP9h.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bm_q4tEf.js";import"./throttle-t_Ovqcxg.js";import"./axisSelectors-mOjibS9Y.js";import"./d3-scale-tiUNr7pP.js";import"./CartesianAxis-DcDhI6Zy.js";import"./Layer-BocGZ-Qs.js";import"./types-BDYL0NFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CyR8q6N_.js";import"./index-CuX-9nTc.js";import"./index-BaTm8cby.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CjcGVgxW.js";import"./index-B-weJfXM.js";import"./fillDefinitions-CQ2sIcKf.js";import"./CartesianChart-Dsv7MZH7.js";import"./chartDataContext-DG3vMJ0c.js";import"./CategoricalChart-BE4FjrpO.js";import"./Symbols-Bto4wFMn.js";import"./symbol-CxF-LE8W.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BWm_b5s0.js";import"./uniqBy-CV4gXzpe.js";import"./iteratee-WJSBnlLa.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BBakNZKq.js";import"./Curve-CKBXq4VL.js";import"./step-BD0nB0zO.js";import"./dataEntryStyles-3agXA2tK.js";import"./ActivePoints-Bn0_DXo_.js";import"./Dot-3vV8DYVs.js";import"./activeStyles-DE7rNFoN.js";import"./useAnimationId-CO4-0stH.js";import"./ErrorBarContext-BaUlHsru.js";import"./SetGraphicalItem-BSkWbVqw.js";import"./ActiveShapeUtils-YveQ6HiU.js";import"./useEffectiveDataKey-Don9Yvym.js";import"./Cross-Dv1-Z6ov.js";import"./Rectangle-DkydH7xZ.js";import"./util-Dxo8gN5i.js";import"./Sector-BYQ9JvD_.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
