import{r as k,R as e}from"./iframe-GEWoEgYU.js";import{g as B}from"./utils-ePvtT4un.js";import{S as f}from"./ScatterChartArgs-DVckGNEz.js";import{a as w}from"./assertNotNull-uK_qSLsC.js";import{S as c}from"./ScatterChart-JkVkrVRY.js";import{C as g}from"./CartesianGrid-ifwHriUt.js";import{X as b}from"./XAxis-BNnHyyR6.js";import{Y as l}from"./YAxis-Do1ezRev.js";import{Z as F}from"./ZAxis-Cgz1aCa7.js";import{T as h}from"./Tooltip-BAVFGGcA.js";import{L as T}from"./Legend-Baxiyi7r.js";import{S as m}from"./Scatter-DsZJsJaF.js";import{R as I}from"./zIndexSlice-m50y9bt7.js";import{R as O}from"./ReferenceArea-mUY60NRL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DUhcDKTP.js";import"./resolveDefaultProps-DpAlDskP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-3BecUZh2.js";import"./throttle-DQWr01n7.js";import"./index-jF3_l_DR.js";import"./index-BmM7Rlr-.js";import"./isWellBehavedNumber-Btl-gf2F.js";import"./d3-scale-DtRX2T9P.js";import"./index-BTro793U.js";import"./index-BkcefAXR.js";import"./renderedTicksSlice-Cm6mh1F9.js";import"./index-xNr63OGc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D7rp_ejt.js";import"./chartDataContext-BO36yNvS.js";import"./CategoricalChart-B9B91N22.js";import"./CartesianAxis-DN5o5nX3.js";import"./Layer-B28G2hIY.js";import"./Text-DisRgGpM.js";import"./DOMUtils-_s9ELKXC.js";import"./useId-CSqY47p_.js";import"./useBackwardsCompatibleTheme-CDx1dLi4.js";import"./Label-BrqW8KDJ.js";import"./ZIndexLayer-UqU4qgkO.js";import"./types-BibJ3Nmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./useAnimationId-DCtzAZ-Q.js";import"./useElementOffset-sZ_quz8S.js";import"./uniqBy-D4LQ95gw.js";import"./iteratee-uHmSd5oe.js";import"./Curve-BIh3ht4a.js";import"./step-CWzaE13R.js";import"./path-DyVhHtw_.js";import"./Cross-BeFe6Kls.js";import"./Rectangle-CjQE5fD5.js";import"./util-Dxo8gN5i.js";import"./Sector-DKArG2GN.js";import"./Symbols-BS2jIWeJ.js";import"./symbol-CcpcFect.js";import"./AnimatedItems-BGlMg_gS.js";import"./tooltipContext-Nw3ArW6V.js";import"./ActiveShapeUtils-Bfg_gjnw.js";import"./RegisterGraphicalItemId-oyNCw2MY.js";import"./ErrorBarContext-n9OrelsP.js";import"./GraphicalItemClipPath-CQvdMfqc.js";import"./SetGraphicalItem-CiQmIVfI.js";import"./useGraphicalItemIdentity-CuKg9Fcq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const W=[{year:2011,babies:312,length:194.5},{year:2012,babies:335,length:345.333},{year:2013,babies:366,length:243.667},{year:2014,babies:409,length:843.5},{year:2015,babies:382,length:484.4},{year:2016,babies:427,length:735.898},{year:2017,babies:439,length:733.833},{year:2018,babies:430,length:638.625},{year:2019,babies:438,length:700.172},{year:2020,babies:463,length:1009.8},{year:2021,babies:568,length:1556.52},{year:2022,babies:476,length:1288.42}],et={component:c,argTypes:f,docs:{autodocs:!1}},d={render:t=>e.createElement(c,{...t},e.createElement(g,{vertical:!1,yAxisId:"axis-babies"}),e.createElement(b,{type:"category",dataKey:"year",name:"Year"}),e.createElement(l,{yAxisId:"axis-babies",type:"number",dataKey:"babies",label:{value:"Babies born",position:"center",angle:-90,stroke:"black",dx:-20},domain:["dataMin","dataMax"],stroke:"black",name:"Babies born",unit:"",orientation:"left",axisLine:!1,tickLine:!1,tickCount:5}),e.createElement(l,{yAxisId:"axis-youtube",type:"number",dataKey:"length",stroke:"red",orientation:"right",name:"Video length",unit:"",domain:["dataMin","dataMax"],label:{value:"Length in seconds",position:"center",angle:90,stroke:"red",dx:30},tickCount:5,axisLine:!1,tickLine:!1}),e.createElement(T,null),e.createElement(m,{lineType:"joint",line:!0,name:"Babies of all sexes born in the US named Mara. Source: US Social Security Administration (https://www.ssa.gov/oact/babynames/index.html)",yAxisId:"axis-babies",fill:"black",shape:"diamond",strokeWidth:2,strokeDasharray:"3 1"}),e.createElement(m,{line:!0,lineType:"joint",name:"Average length of Stand-up Maths YouTube videos. Source: YouTube",yAxisId:"axis-youtube",fill:"red",strokeWidth:2,shape:"circle"}),e.createElement(h,{cursor:{strokeDasharray:"3 3"},shared:!1})),args:{...B(f),width:800,height:400,margin:{top:0,right:20,bottom:0,left:20},data:W}},u={render:t=>{const n=[{x:100,y:100,z:200},{x:100,y:200,z:200},{x:100,y:300,z:200}];return e.createElement(I,{width:"100%",height:400},e.createElement(c,null,e.createElement(g,null),e.createElement(b,{type:"category",allowDuplicatedCategory:!!t.allowDuplicatedCategory,dataKey:"x",name:"stature",unit:"cm"}),e.createElement(l,{type:"category",allowDuplicatedCategory:!!t.allowDuplicatedCategory,dataKey:"y",name:"weight",unit:"kg"}),e.createElement(m,{activeShape:{fill:"red"},name:"A school",data:n}),e.createElement(h,{cursor:{strokeDasharray:"3 3"}}),e.createElement(T,null)))},args:{allowDuplicatedCategory:!1}},p={render:t=>{const n=[{x:{value:1},name:"x1"},{x:{value:2},name:"x2"},{x:{value:3},name:"x3"}],a=[{y:{value:3},name:"y1"},{y:{value:2},name:"y2"},{y:{value:1},name:"y3"}],r=s=>(w(s.x),s.x.value),i=s=>(w(s.y),s.y.value),[o,D]=k.useState(!1),[j,x]=k.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{type:"button",onClick:()=>{D(!1),x(!0)}},"Use data1"),e.createElement("button",{type:"button",onClick:()=>{D(!0),x(!0)}},"Use data2"),e.createElement("button",{type:"button",onClick:()=>{x(!1)}},"Hide"),e.createElement(c,{...t,data:o?a:n},e.createElement(g,{strokeDasharray:"3 3"}),e.createElement(b,{dataKey:"name",padding:{left:30,right:30}}),e.createElement(l,{dataKey:o?i:r,width:"auto"}),e.createElement(F,{range:[200,200]}),e.createElement(h,null),e.createElement(T,null),e.createElement(m,{name:"Animated Scatter",lineType:"joint",line:!0,hide:!j,dataKey:o?i:r,stroke:"#8884d8",fill:"#8884d8",strokeWidth:3,strokeDasharray:"2 2",label:{fill:"red",dy:-25,dataKey:o?i:r}})))},args:{...B(f),width:500,height:300,margin:{top:30,right:30,left:20,bottom:5}}},z=t=>{const n=new Date(t);let a=n.getHours();const r=n.getMinutes(),i=a>=12?"PM":"AM";return a%=12,a=a===0?12:a,r>0?`${a}:${r.toString().padStart(2,"0")} ${i}`:`${a} ${i}`},y={render:()=>e.createElement(I,{width:"100%",height:400},e.createElement(c,{margin:{top:20,right:20,bottom:20,left:20}},e.createElement(g,null),e.createElement(O,{y1:70,y2:150}),e.createElement(b,{type:"number",allowDataOverflow:!0,ticks:[new Date("2025-05-06T00:00:00").getTime(),new Date("2025-05-06T03:00:00").getTime(),new Date("2025-05-06T06:00:00").getTime(),new Date("2025-05-06T09:00:00").getTime(),new Date("2025-05-06T12:00:00").getTime(),new Date("2025-05-06T15:00:00").getTime(),new Date("2025-05-06T18:00:00").getTime(),new Date("2025-05-06T21:00:00").getTime(),new Date("2025-05-07T00:00:00").getTime()],tickFormatter:(t,n)=>typeof t!="number"?String(t):z(t),dataKey:"hour",domain:[new Date("2025-05-06T00:00:00").getTime(),new Date("2025-05-07T00:00:00").getTime()]}),e.createElement(l,{allowDataOverflow:!0,type:"number",ticks:[0,80,180,220]}),e.createElement(h,{cursor:{strokeDasharray:"3 3"}}),e.createElement(m,{name:"A school",data:[],fill:"#8884d8"})))},tt=["SpurriousCorrelation","WithDuplicatedCategory","ChangingDataKey","EmptyChart"];var S,C,A;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var v,E,K;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    allowDuplicatedCategory: false
  }
}`,...(K=(E=u.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var M,L,R;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: (args: Args) => {
    type MockDataType = {
      x?: {
        value: number;
      };
      y?: {
        value: number;
      };
      name: string;
    };
    const data1: ReadonlyArray<MockDataType> = [{
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
    const data2: ReadonlyArray<MockDataType> = [{
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
    const dataKey1 = (d: MockDataType) => {
      assertNotNull(d.x);
      return d.x.value;
    };
    const dataKey2 = (d: MockDataType) => {
      assertNotNull(d.y);
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
}`,...(R=(L=p.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var Y,U,V;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};export{p as ChangingDataKey,y as EmptyChart,d as SpurriousCorrelation,u as WithDuplicatedCategory,tt as __namedExportsOrder,et as default};
