import{e,r as w}from"./iframe-CT4QuQ5L.js";import{g as V}from"./utils-ePvtT4un.js";import{S as f}from"./ScatterChartArgs-BJpmjn08.js";import{S as m}from"./ScatterChart-CqLFdMJm.js";import{C as y}from"./CartesianGrid-B5eEZuRf.js";import{X as g}from"./XAxis-DHcCUjsJ.js";import{Y as s}from"./YAxis-BZSCjBeJ.js";import{L as T}from"./Legend-BmzI-m1q.js";import{S as l}from"./Scatter-CDo0puPS.js";import{T as b}from"./Tooltip-D4I9rTHE.js";import{R as D}from"./RechartsHookInspector-lcTlhUAW.js";import{R as B}from"./arrayEqualityCheck-CUEtHgfA.js";import{Z as H}from"./ZAxis-Dp_jo1ju.js";import{R as F}from"./ReferenceArea-flSPGAYv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dw0rEgTJ.js";import"./hooks-CidIT9Ht.js";import"./axisSelectors-DlMKUcSY.js";import"./zIndexSlice-BbZ3gLFC.js";import"./resolveDefaultProps-CTWHIHtK.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-ChOeo1co.js";import"./chartDataContext-BO8jZHln.js";import"./CategoricalChart-DmUQY6Sd.js";import"./CartesianAxis-ByfjT7H_.js";import"./Layer-BIxjtyeO.js";import"./Text-ZzNZJtBS.js";import"./DOMUtils-CDXEyiOj.js";import"./Label-CFlrJOC9.js";import"./ZIndexLayer-B4whtcRw.js";import"./types-CGMRlxY8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-NgG1d1Uj.js";import"./Curve-CwfbqPR9.js";import"./useElementOffset-B6r2EuKs.js";import"./iteratee-BP4C4rB0.js";import"./ReactUtils-BD8G1aYb.js";import"./tooltipContext-BarcjW0L.js";import"./ActiveShapeUtils-Pkd70I7I.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJlDY3Tg.js";import"./useAnimationId-ByA7rgvy.js";import"./Trapezoid-C3eKH3hP.js";import"./Sector-BFKxB58R.js";import"./RegisterGraphicalItemId-CxRMjxHS.js";import"./ErrorBarContext-DQ9IsJoH.js";import"./GraphicalItemClipPath-BaTdDRki.js";import"./SetGraphicalItem-BrCNGFd6.js";import"./Cross-CDfR4P6Z.js";import"./index-DDx2nU6r.js";import"./ChartSizeDimensions-71uSM08s.js";import"./OffsetShower-bHCqATCI.js";import"./PlotAreaShower-DYHCw4lK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const O=[{year:2011,babies:312,length:194.5},{year:2012,babies:335,length:345.333},{year:2013,babies:366,length:243.667},{year:2014,babies:409,length:843.5},{year:2015,babies:382,length:484.4},{year:2016,babies:427,length:735.898},{year:2017,babies:439,length:733.833},{year:2018,babies:430,length:638.625},{year:2019,babies:438,length:700.172},{year:2020,babies:463,length:1009.8},{year:2021,babies:568,length:1556.52},{year:2022,babies:476,length:1288.42}],ze={component:m,argTypes:f,docs:{autodocs:!1}},c={render:t=>e.createElement(m,{...t},e.createElement(y,{vertical:!1,yAxisId:"axis-babies"}),e.createElement(g,{type:"category",dataKey:"year",name:"Year"}),e.createElement(s,{yAxisId:"axis-babies",type:"number",dataKey:"babies",label:{value:"Babies born",position:"center",angle:-90,stroke:"black",dx:-20},domain:["dataMin","dataMax"],stroke:"black",name:"Babies born",unit:"",orientation:"left",axisLine:!1,tickLine:!1,tickCount:5}),e.createElement(s,{yAxisId:"axis-youtube",type:"number",dataKey:"length",stroke:"red",orientation:"right",name:"Video length",unit:"",domain:["dataMin","dataMax"],label:{value:"Length in seconds",position:"center",angle:90,stroke:"red",dx:30},tickCount:5,axisLine:!1,tickLine:!1}),e.createElement(T,null),e.createElement(l,{lineType:"joint",line:!0,name:"Babies of all sexes born in the US named Mara. Source: US Social Security Administration (https://www.ssa.gov/oact/babynames/index.html)",yAxisId:"axis-babies",fill:"black",shape:"diamond",strokeWidth:2,strokeDasharray:"3 1"}),e.createElement(l,{line:!0,lineType:"joint",name:"Average length of Stand-up Maths YouTube videos. Source: YouTube",yAxisId:"axis-youtube",fill:"red",strokeWidth:2,shape:"circle"}),e.createElement(b,{cursor:{strokeDasharray:"3 3"},shared:!1}),e.createElement(D,null)),args:{...V(f),width:800,height:400,margin:{top:0,right:20,bottom:0,left:20},data:O}},d={render:t=>{const r=[{x:100,y:100,z:200},{x:100,y:200,z:200},{x:100,y:300,z:200}];return e.createElement(B,{width:"100%",height:400},e.createElement(m,null,e.createElement(y,null),e.createElement(g,{type:"category",allowDuplicatedCategory:!!t.allowDuplicatedCategory,dataKey:"x",name:"stature",unit:"cm"}),e.createElement(s,{type:"category",allowDuplicatedCategory:!!t.allowDuplicatedCategory,dataKey:"y",name:"weight",unit:"kg"}),e.createElement(l,{activeShape:{fill:"red"},name:"A school",data:r}),e.createElement(b,{cursor:{strokeDasharray:"3 3"}}),e.createElement(T,null),e.createElement(D,null)))},args:{allowDuplicatedCategory:!1}},u={render:t=>{const r=[{x:{value:1},name:"x1"},{x:{value:2},name:"x2"},{x:{value:3},name:"x3"}],a=[{y:{value:3},name:"y1"},{y:{value:2},name:"y2"},{y:{value:1},name:"y3"}],i=x=>x.x.value,o=x=>x.y.value,[n,k]=w.useState(!1),[j,h]=w.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{k(!1),h(!0)}},"Use data1"),e.createElement("button",{type:"button",onClick:()=>{k(!0),h(!0)}},"Use data2"),e.createElement("button",{type:"button",onClick:()=>{h(!1)}},"Hide"),e.createElement(m,{...t,data:n?a:r},e.createElement(y,{strokeDasharray:"3 3"}),e.createElement(g,{dataKey:"name",padding:{left:30,right:30}}),e.createElement(s,{dataKey:n?o:i,width:"auto"}),e.createElement(H,{range:[200,200]}),e.createElement(b,null),e.createElement(T,null),e.createElement(l,{name:"Animated Scatter",lineType:"joint",line:!0,hide:!j,dataKey:n?o:i,stroke:"#8884d8",fill:"#8884d8",strokeWidth:3,strokeDasharray:"2 2",label:{fill:"red",dy:-25,dataKey:n?o:i}}),e.createElement(D,null)))},args:{...V(f),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},W=t=>{const r=new Date(t);let a=r.getHours();const i=r.getMinutes(),o=a>=12?"PM":"AM";return a%=12,a=a===0?12:a,i>0?`${a}:${i.toString().padStart(2,"0")} ${o}`:`${a} ${o}`},p={render:()=>e.createElement(B,{width:"100%",height:400},e.createElement(m,{margin:{top:20,right:20,bottom:20,left:20}},e.createElement(y,null),e.createElement(F,{y1:70,y2:150}),e.createElement(g,{type:"number",allowDataOverflow:!0,ticks:[new Date("2025-05-06T00:00:00").getTime(),new Date("2025-05-06T03:00:00").getTime(),new Date("2025-05-06T06:00:00").getTime(),new Date("2025-05-06T09:00:00").getTime(),new Date("2025-05-06T12:00:00").getTime(),new Date("2025-05-06T15:00:00").getTime(),new Date("2025-05-06T18:00:00").getTime(),new Date("2025-05-06T21:00:00").getTime(),new Date("2025-05-07T00:00:00").getTime()],tickFormatter:(t,r)=>typeof t!="number"?String(t):W(t),dataKey:"hour",domain:[new Date("2025-05-06T00:00:00").getTime(),new Date("2025-05-07T00:00:00").getTime()]}),e.createElement(s,{allowDataOverflow:!0,type:"number",ticks:[0,80,180,220]}),e.createElement(b,{cursor:{strokeDasharray:"3 3"}}),e.createElement(l,{name:"A school",data:[],fill:"#8884d8"})))};var S,C,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ScatterChart {...args}>
        <CartesianGrid vertical={false} yAxisId="axis-babies" />
        <XAxis type="category" dataKey="year" name="Year" />
        <YAxis yAxisId="axis-babies" type="number" dataKey="babies" label={{
        value: 'Babies born',
        position: 'center',
        angle: -90,
        stroke: 'black',
        dx: -20
      }} domain={['dataMin', 'dataMax']} stroke="black" name="Babies born" unit="" orientation="left" axisLine={false} tickLine={false} tickCount={5} />
        <YAxis yAxisId="axis-youtube" type="number" dataKey="length" stroke="red" orientation="right" name="Video length" unit="" domain={['dataMin', 'dataMax']} label={{
        value: 'Length in seconds',
        position: 'center',
        angle: 90,
        stroke: 'red',
        dx: 30
      }} tickCount={5} axisLine={false} tickLine={false} />
        <Legend />
        <Scatter lineType="joint" line name="Babies of all sexes born in the US named Mara. Source: US Social Security Administration (https://www.ssa.gov/oact/babynames/index.html)" yAxisId="axis-babies" fill="black" shape="diamond" strokeWidth={2} strokeDasharray="3 1" />
        <Scatter line lineType="joint" name="Average length of Stand-up Maths YouTube videos. Source: YouTube" yAxisId="axis-youtube" fill="red" strokeWidth={2} shape="circle" />
        <Tooltip cursor={{
        strokeDasharray: '3 3'
      }} shared={false} />
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    width: 800,
    height: 400,
    margin: {
      top: 0,
      right: 20,
      bottom: 0,
      left: 20
    },
    data: babiesAndVideosCorrelation
  }
}`,...(A=(C=c.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var E,v,K;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data = [{
      x: 100,
      y: 100,
      z: 200
    }, {
      x: 100,
      y: 200,
      z: 200
    }, {
      x: 100,
      y: 300,
      z: 200
    }];
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis type="category" allowDuplicatedCategory={Boolean(args.allowDuplicatedCategory)} dataKey="x" name="stature" unit="cm" />
          <YAxis type="category" allowDuplicatedCategory={Boolean(args.allowDuplicatedCategory)} dataKey="y" name="weight" unit="kg" />
          <Scatter activeShape={{
          fill: 'red'
        }} name="A school" data={data} />
          <Tooltip cursor={{
          strokeDasharray: '3 3'
        }} />
          <Legend />
          <RechartsHookInspector />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    allowDuplicatedCategory: false
  }
}`,...(K=(v=d.parameters)==null?void 0:v.docs)==null?void 0:K.source}}};var L,M,I;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data1 = [{
      x: {
        value: 1
      },
      name: 'x1'
    }, {
      x: {
        value: 2
      },
      name: 'x2'
    }, {
      x: {
        value: 3
      },
      name: 'x3'
    }];
    const data2 = [{
      y: {
        value: 3
      },
      name: 'y1'
    }, {
      y: {
        value: 2
      },
      name: 'y2'
    }, {
      y: {
        value: 1
      },
      name: 'y3'
    }];
    const dataKey1 = (d: any) => {
      return d.x.value;
    };
    const dataKey2 = (d: any) => {
      return d.y.value;
    };
    const [useData2, setUseData2] = useState(false);
    const [visible, setVisible] = useState(true);
    return <>
        <button type="button" onClick={() => {
        setUseData2(false);
        setVisible(true);
      }}>
          Use data1
        </button>
        <button type="button" onClick={() => {
        setUseData2(true);
        setVisible(true);
      }}>
          Use data2
        </button>
        <button type="button" onClick={() => {
        setVisible(false);
      }}>
          Hide
        </button>
        <ScatterChart {...args} data={useData2 ? data2 : data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{
          left: 30,
          right: 30
        }} />
          <YAxis dataKey={useData2 ? dataKey2 : dataKey1} width="auto" />
          <ZAxis range={[200, 200]} />
          <Tooltip />
          <Legend />
          <Scatter name="Animated Scatter" lineType="joint" line hide={!visible} dataKey={useData2 ? dataKey2 : dataKey1} stroke="#8884d8" fill="#8884d8" strokeWidth={3} strokeDasharray="2 2" label={{
          fill: 'red',
          dy: -25,
          dataKey: useData2 ? dataKey2 : dataKey1
        }} />
          <RechartsHookInspector />
        </ScatterChart>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    width: 500,
    height: 300,
    margin: {
      top: 30,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(I=(M=u.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var R,Y,U;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <CartesianGrid />
          <ReferenceArea y1={70} y2={150} />
          <XAxis type="number" allowDataOverflow ticks={[new Date('2025-05-06T00:00:00').getTime(), new Date('2025-05-06T03:00:00').getTime(), new Date('2025-05-06T06:00:00').getTime(), new Date('2025-05-06T09:00:00').getTime(), new Date('2025-05-06T12:00:00').getTime(), new Date('2025-05-06T15:00:00').getTime(), new Date('2025-05-06T18:00:00').getTime(), new Date('2025-05-06T21:00:00').getTime(), new Date('2025-05-07T00:00:00').getTime()]} tickFormatter={(tickValue, _index) => {
          if (typeof tickValue !== 'number') return String(tickValue);
          const label = getHourFromTimestamp(tickValue);
          return label;
        }} dataKey="hour" domain={[new Date('2025-05-06T00:00:00').getTime(), new Date('2025-05-07T00:00:00').getTime()]} />
          <YAxis allowDataOverflow type="number" ticks={[0, 80, 180, 220]} />
          <Tooltip cursor={{
          strokeDasharray: '3 3'
        }} />
          <Scatter name="A school" data={[]} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>;
  }
}`,...(U=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};const Xe=["SpurriousCorrelation","WithDuplicatedCategory","ChangingDataKey","EmptyChart"];export{u as ChangingDataKey,p as EmptyChart,c as SpurriousCorrelation,d as WithDuplicatedCategory,Xe as __namedExportsOrder,ze as default};
