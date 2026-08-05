import{R as t}from"./iframe-D972tbhF.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-MB1xCt9L.js";import{R as h}from"./zIndexSlice-Dmvy26G-.js";import{L as A}from"./LineChart-BGgzHg8X.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CY_9Ffyk.js";import{X as f}from"./XAxis-QP_2w1I7.js";import{L as E}from"./Legend-Du5VkTqb.js";import{L as n}from"./Line-DPj7HunO.js";import{T as v}from"./Tooltip-TE4pRVsg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BZnc8KKN.js";import"./Text-Dysxol0f.js";import"./resolveDefaultProps-D_CwbNhq.js";import"./DOMUtils-DPBa-ha3.js";import"./isWellBehavedNumber-CISTmZa5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dhusbhig.js";import"./index-D9VN6yju.js";import"./index-C5z2sCvf.js";import"./RechartsWrapper-ouFvztbg.js";import"./index-oKVWKKHt.js";import"./index-zPQcggW0.js";import"./throttle-D2OThsuy.js";import"./axisSelectors-uJIqnO2D.js";import"./d3-scale-CR9xOcuY.js";import"./renderedTicksSlice-Dv4CGxUS.js";import"./CartesianAxis-B06URywl.js";import"./Layer-C5RVdPDc.js";import"./types-DLeA2L4w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C7EwwBej.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BjAe6VAT.js";import"./chartDataContext-Cq56uXGO.js";import"./CategoricalChart-DKJz-sZX.js";import"./Symbols-duaXYgIE.js";import"./symbol-v0Ok8s8m.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BmB2opmc.js";import"./uniqBy-Dj3fIOcG.js";import"./iteratee-BauBQiDY.js";import"./Curve-DGKxAkYd.js";import"./step-9Pc3Vsuh.js";import"./AnimatedItems-2p3qtLJi.js";import"./useAnimationId-BPwHrlOs.js";import"./ActivePoints-SQF2J3GR.js";import"./Dot-DBr8YjaB.js";import"./RegisterGraphicalItemId-ySe1Fca9.js";import"./ErrorBarContext-DNvNglsi.js";import"./GraphicalItemClipPath-DuVjniBd.js";import"./SetGraphicalItem-EZqGepIx.js";import"./graphicalItemIdentity-BolIVYF7.js";import"./ActiveShapeUtils-D5m6KacQ.js";import"./Cross-Cw9WjHFk.js";import"./Rectangle-C3KTtfAJ.js";import"./util-Dxo8gN5i.js";import"./Sector-B0ejNnxM.js";const Wt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Ot=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Ot as __namedExportsOrder,Wt as default};
