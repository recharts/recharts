import{R as t}from"./iframe-BCd41l8E.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-HwtSiSZk.js";import{R as h}from"./zIndexSlice-vwglsLr7.js";import{L as A}from"./LineChart--rT6z1G3.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CjqtIjwN.js";import{X as f}from"./XAxis-B6fLtz1T.js";import{L as E}from"./Legend-DQcAn4kt.js";import{L as n}from"./Line-Bu3kEO38.js";import{T as v}from"./Tooltip-Dxc-2dxe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BGS-IakE.js";import"./Text-rlFfv_Ik.js";import"./resolveDefaultProps-CfjrcH5k.js";import"./DOMUtils--ioWONbC.js";import"./isWellBehavedNumber-By99v6ya.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4KPetXp.js";import"./index-DqhoEKLL.js";import"./index-DbWv8bq-.js";import"./RechartsWrapper-DAuP6JTc.js";import"./index-B6Q7w6aQ.js";import"./index-BUl2VpQi.js";import"./throttle-COzcAqD2.js";import"./renderedTicksSlice-DGgd7qJG.js";import"./axisSelectors-BWK81-bk.js";import"./d3-scale-BUxy_yCJ.js";import"./CartesianAxis-B_R0lNNU.js";import"./Layer-BlOdZtAq.js";import"./types-CEIkXXH7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BUnkOlSA.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C3_p9XVE.js";import"./chartDataContext-Drys5Aq2.js";import"./CategoricalChart-D4f6D4jQ.js";import"./Symbols-DLSOvSIF.js";import"./symbol-BkoVcfiX.js";import"./path-DyVhHtw_.js";import"./useElementOffset-P2rqDW92.js";import"./uniqBy-DVKsDt21.js";import"./iteratee-Dj9diA2M.js";import"./Curve-5IbJhmxY.js";import"./step-B-Fp4nlk.js";import"./AnimatedItems-Dw69Yp-8.js";import"./useAnimationId-CGoXgsW2.js";import"./ActivePoints-Ca9ELXuu.js";import"./Dot-k24tsyTI.js";import"./RegisterGraphicalItemId-BNOR99Vc.js";import"./ErrorBarContext-ChbGQHV7.js";import"./GraphicalItemClipPath-mTO3f3R8.js";import"./SetGraphicalItem-C-GN70LS.js";import"./getRadiusAndStrokeWidthFromDot-Cs1a3Mwu.js";import"./ActiveShapeUtils-B7pKCaaA.js";import"./Cross-6F6iIWdN.js";import"./Rectangle-DzQvr8Y1.js";import"./util-Dxo8gN5i.js";import"./Sector-B1oSRv3z.js";const Wt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
