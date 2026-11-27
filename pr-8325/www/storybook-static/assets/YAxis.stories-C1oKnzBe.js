import{R as t}from"./iframe-CqOe7k5Y.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-DEQnYc30.js";import{R as h}from"./zIndexSlice-HvZ_KFp3.js";import{L as A}from"./LineChart-DGBEjS9P.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DMqUn0Lg.js";import{X as f}from"./XAxis-BHc3UEw3.js";import{L as E}from"./Legend-B3y3jZUw.js";import{L as i}from"./Line-BAO_KFfa.js";import{T as v}from"./Tooltip-WSmd3WjN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uDtrY5a-.js";import"./get-CjriyByo.js";import"./Label-yQ-nD2jU.js";import"./Text-N8PDZP4n.js";import"./ZIndexLayer-Bx6NEOZE.js";import"./index-NjrwBPri.js";import"./index-Nzssfkwo.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnFOpaLb.js";import"./throttle-BawAsSGW.js";import"./axisSelectors-HXuL0A3L.js";import"./diverging-B6EefrnE.js";import"./CartesianAxis-botWNN7F.js";import"./Layer-CqFOI8aQ.js";import"./types-DHkZz5Qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-tkfTkQ.js";import"./index-C49j9LJv.js";import"./index-DQgKuLzP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C6U1x4NS.js";import"./index-CjpYzq4S.js";import"./fillDefinitions-BUUlO_ua.js";import"./CartesianChart-CGVfE0i2.js";import"./chartDataContext-B9y28Tuh.js";import"./CategoricalChart-Cm4y0z4v.js";import"./Symbols-DOIoBL3s.js";import"./symbol-Cf12ZYaI.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BT23gI0j.js";import"./uniqBy-bwHS4C5O.js";import"./iteratee-BmCg4GfS.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-iFUrCwsR.js";import"./Curve-C0AiDBmT.js";import"./step-C0xBjYaF.js";import"./dataEntryStyles-CclxtIIf.js";import"./ActivePoints-DOsR5596.js";import"./Dot-QqtvItF4.js";import"./activeStyles-DyQy4djd.js";import"./useAnimationId-_GPHqvCi.js";import"./ErrorBarContext-CQfvj0jY.js";import"./SetGraphicalItem-5gHOvcya.js";import"./ActiveShapeUtils-dZojZzcj.js";import"./useEffectiveDataKey-C_dNJO7p.js";import"./Cross-Mf8tP6j1.js";import"./Rectangle-mBtSHpSc.js";import"./util-Dxo8gN5i.js";import"./Sector-DS5Y07lN.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
