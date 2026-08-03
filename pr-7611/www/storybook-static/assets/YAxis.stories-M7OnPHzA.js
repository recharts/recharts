import{R as t}from"./iframe-w1sUw1VE.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DDPi_wRf.js";import{R as h}from"./zIndexSlice-BFtIIbIH.js";import{L as A}from"./LineChart-DCjXqGaj.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CoEf9ips.js";import{X as f}from"./XAxis-Cjs911bp.js";import{L as E}from"./Legend-khSSA6cZ.js";import{L as n}from"./Line-D9Or3fJp.js";import{T as v}from"./Tooltip-CdVD6gEW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DclIafX4.js";import"./Text-BMcE5w5g.js";import"./resolveDefaultProps-DsVHMq00.js";import"./DOMUtils-CT4eanyO.js";import"./isWellBehavedNumber-B6HqUKYK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BmjcQumE.js";import"./index-CKtl8pQB.js";import"./index-JAlJc66Y.js";import"./RechartsWrapper-kdFU-RZ0.js";import"./index-B50wbS8k.js";import"./index-DREvHpCt.js";import"./throttle-9uSjnkRJ.js";import"./renderedTicksSlice-BYSsRx-Z.js";import"./axisSelectors-Fjy06-Ct.js";import"./d3-scale-BNSttRgc.js";import"./CartesianAxis-CxEX_iq4.js";import"./Layer-B0FPP_Ev.js";import"./types-BKQwKiAc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-ws5do87s.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cpc3KnxA.js";import"./chartDataContext-Qn0Ey9bz.js";import"./CategoricalChart-DPuU_nkZ.js";import"./Symbols-BlaayCBT.js";import"./symbol-CiPnu7Sy.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bq1Ge05V.js";import"./uniqBy-Dg36dhD9.js";import"./iteratee-DSG09e17.js";import"./Curve-C6IEG5wt.js";import"./step-DwoRKPdQ.js";import"./AnimatedItems-BO3fZMy0.js";import"./useAnimationId-oodeuVFJ.js";import"./ActivePoints-DgvIxblY.js";import"./Dot-0Sa9Tyfc.js";import"./RegisterGraphicalItemId-BXlJHdat.js";import"./ErrorBarContext-DxbwWYVa.js";import"./GraphicalItemClipPath-DIJRkSkT.js";import"./SetGraphicalItem-DINcEBZn.js";import"./graphicalItemIdentity-B_W-R4bm.js";import"./ActiveShapeUtils-D_EfEkHZ.js";import"./Cross-DqwDDtKx.js";import"./Rectangle-unJoww32.js";import"./util-Dxo8gN5i.js";import"./Sector-C0Ix5px1.js";const Wt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
