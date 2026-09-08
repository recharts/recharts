import{R as t}from"./iframe-BAkJeTr4.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-wkouAcT5.js";import{R as h}from"./zIndexSlice-CKNgQ3a1.js";import{L as A}from"./LineChart-DHaLtAhh.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Cl9Si-sv.js";import{X as f}from"./XAxis-BD-kVe53.js";import{L as E}from"./Legend-Dcb99-gu.js";import{L as i}from"./Line-CY96wbQv.js";import{T as v}from"./Tooltip-1xUbPnX5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dc3MUSo6.js";import"./Text-CbVPJcpZ.js";import"./resolveDefaultProps-5cpPAvAv.js";import"./DOMUtils-Cq0_H_rP.js";import"./isWellBehavedNumber-tRFPHljB.js";import"./useId-Dap1RfTv.js";import"./useBackwardsCompatibleTheme-sM5V7IYB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D5m0oF5l.js";import"./index-DjVuoFnH.js";import"./index-XgffbxYa.js";import"./RechartsWrapper-EWDb0L0f.js";import"./axisSelectors-CSrb8LKj.js";import"./throttle-Dv1aPsuB.js";import"./d3-scale-CDR0rKSq.js";import"./index-DAtUpVNY.js";import"./index-D15jXgP1.js";import"./renderedTicksSlice-BJEMwp3X.js";import"./index-I2U5t58b.js";import"./CartesianAxis-DtahLlIk.js";import"./Layer-CKQWhaEi.js";import"./types-HIIkAPMh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DDPBhM-t.js";import"./chartDataContext-BT4eLMiU.js";import"./CategoricalChart-BbbjbFxH.js";import"./Symbols-fYq7nkG0.js";import"./symbol-DpBVLgIw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-A8S9o9XT.js";import"./uniqBy-DQFF8pwP.js";import"./iteratee-plK0tt8R.js";import"./Curve-BVog-1mq.js";import"./step-C9hVegCW.js";import"./AnimatedItems-DuF6Bkm2.js";import"./useAnimationId-CvTUgOKN.js";import"./ActivePoints-AYIQDcyP.js";import"./Dot-CleLxuMG.js";import"./RegisterGraphicalItemId-Bt_uVbrn.js";import"./ErrorBarContext-DuO3heB_.js";import"./GraphicalItemClipPath-Bys_fmGG.js";import"./SetGraphicalItem-BwMH--N4.js";import"./getRadiusAndStrokeWidthFromDot-BNUuDnnH.js";import"./ActiveShapeUtils-EPv0ZgAx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D6GYkf9L.js";import"./Rectangle-DL0w3-z6.js";import"./util-Dxo8gN5i.js";import"./Sector-DJxmcL1Z.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
