import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-B6tGW3fj.js";import{r}from"./react-dom-BAdZJrCc.js";import{G as i,K as a}from"./zIndexSlice-CfT4cgn7.js";import{n as ee,t as te}from"./Legend-XcO656Mc.js";import{i as ne,n as re,r as ie,t as o}from"./Tooltip-YHivrOZa.js";import{n as ae,t as oe}from"./RadialBar-CWcwI7km.js";import{n as se,t as ce}from"./CartesianGrid-C0BAtXH9.js";import{n as le,t as s}from"./Line---TR8N4V.js";import{n as ue,t as de}from"./Area-CqYIOjBK.js";import{n as fe,t as c}from"./Bar-CQB3-sR3.js";import{n as pe,t as l}from"./XAxis-BC2eC402.js";import{n as me,t as u}from"./YAxis-Ch1VfSce.js";import{n as he,t as d}from"./LineChart-DFJO6Y-4.js";import{n as ge,t as _e}from"./BarChart-CpIQPN2H.js";import{n as ve,t as ye}from"./RadialBarChart-BLfl7Ppx.js";import{n as be,t as f}from"./ComposedChart-CZOHGVI-.js";import{r as p,t as xe}from"./Page-DUsfWi7y.js";import{n as Se,t as m}from"./utils-vqcWnakT.js";import{n as Ce,t as h}from"./TooltipArgs-DgRIUHOb.js";function*we(e){let t=2**16+1,n=e;for(n>0&&n<1&&(n=Math.round(n*1e3));n<0;)n+=t;for(;;)n=(75*n+74)%t,yield Math.round(n)}function g(e,t,n){return e.next().value%(n-t)+t}function Te(e,t){let n=[],r=we(t);for(let t=0;t<e;t++)n.push({label:`Iter: ${t}`,x:g(r,100,300),y:g(r,400,800),z:g(r,1e3,2e3)});return n}function Ee(){return(Ee=t((()=>{})))()}function _(){return(_=t((()=>{n()})))()}function De(){return(De=t((()=>{n(),_()})))()}function v(){return(v=t((()=>{n()})))()}function y(){return(y=t((()=>{n()})))()}function b(){return(b=t((()=>{n(),y()})))()}function Oe(){return(Oe=t((()=>{n(),v(),b()})))()}function ke(){return(ke=t((()=>{n(),v(),b(),_()})))()}function Ae(){return(Ae=t((()=>{n(),v(),b(),_()})))()}function x(){return(x=t((()=>{n(),y()})))()}function je(){return(je=t((()=>{n(),x(),_()})))()}function Me(){return(Me=t((()=>{n(),x(),_()})))()}function Ne(){return(Ne=t((()=>{n(),x(),_()})))()}function Pe(){return(Pe=t((()=>{n(),y(),_()})))()}function S(){return(S=t((()=>{n()})))()}var Fe;function C(){return(C=t((()=>{Fe=e(n(),1),(0,Fe.createContext)(null)})))()}function w(){return(w=t((()=>{n()})))()}function T(){return(T=t((()=>{n()})))()}var E;function D(){return(D=t((()=>{E=e(n(),1),E.memo(function({onClick:e,onMouseMove:t,onMouseLeave:n,onMouseDown:r,onMouseUp:i,onMouseEnter:a,pointerEvents:ee=`none`,fill:te=`transparent`,cursor:ne}){return E.createElement(E.Fragment,null,E.createElement(`rect`,{x:0,y:0,width:`100%`,height:`100%`,fill:te,style:{pointerEvents:ee,cursor:ne},onClick:e,onMouseMove:t,onMouseLeave:n,onMouseDown:r,onMouseUp:i,onMouseEnter:a}))})})))()}function O(){return(O=t((()=>{n()})))()}function k(){return(k=t((()=>{n()})))()}function A(){return(A=t((()=>{n()})))()}function j(){return(j=t((()=>{n()})))()}function M(){return(M=t((()=>{n()})))()}function N(){return(N=t((()=>{n()})))()}function P(){return(P=t((()=>{n()})))()}function Ie(){return(Ie=t((()=>{n(),D(),O(),k(),A(),j(),M(),N(),P(),T()})))()}var Le;function Re(){return(Re=t((()=>{n(),Le={padding:`4px 8px`,fontSize:`11px`,cursor:`pointer`,border:`1px solid var(--rd-border, #ccc)`,borderRadius:`3px`,background:`var(--rd-surface, #fff)`,color:`var(--rd-text, inherit)`},{...Le}})))()}function ze(){return(ze=t((()=>{w(),T(),D(),O(),k(),A(),j(),M(),N(),P(),Ie(),Re()})))()}function Be(){return(Be=t((()=>{n(),r(),C(),ze()})))()}function Ve(){return(Ve=t((()=>{n(),x(),_()})))()}function He(){return(He=t((()=>{n(),x(),_()})))()}function Ue(){return(Ue=t((()=>{n(),_(),y()})))()}function We(){return(We=t((()=>{n(),_(),b()})))()}function Ge(){return(Ge=t((()=>{n(),_(),y()})))()}function Ke(){return(Ke=t((()=>{n(),_(),y()})))()}function qe(){return(qe=t((()=>{n(),r(),De(),Oe(),ke(),Ae(),je(),Me(),Ne(),Pe(),S(),C(),Be(),Ve(),He(),Ue(),We(),Ge(),Ke()})))()}function Je(){return(Je=t((()=>{n()})))()}function Ye(){return(Ye=t((()=>{Ee(),qe(),Be(),C(),w(),D(),Je(),S()})))()}var F,Xe,I,L,R,z,B,Ze,Qe,V,H,$e,U,W,G,K,q,J,Y,et,X,Z,Q,$,tt;function nt(){return(nt=t((()=>{F=e(n()),Ye(),xe(),ue(),fe(),ge(),se(),be(),ne(),ee(),le(),he(),ae(),ve(),a(),re(),pe(),me(),Se(),Ce(),Xe={argTypes:h,component:o},I={render:e=>F.createElement(i,{width:`100%`,height:400},F.createElement(f,{data:p},F.createElement(l,{dataKey:`name`}),F.createElement(u,null),F.createElement(o,e),F.createElement(s,{dataKey:`uv`})))},L={...I,args:{...m(h),active:!0}},R={render:e=>F.createElement(d,{width:500,height:300,data:p,accessibilityLayer:!0,margin:{top:5,right:5,bottom:5,left:0}},F.createElement(ce,{stroke:`#eee`,strokeDasharray:`5 5`}),F.createElement(l,{dataKey:`name`}),F.createElement(u,null),F.createElement(o,e),F.createElement(s,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`}),F.createElement(s,{type:`monotone`,dataKey:`pv`,stroke:`#82ca9d`})),args:{...m(h),defaultIndex:2}},z={render:e=>{let[t,n]=F.useState(!1),[r,a]=F.useState({}),ee=e=>(!t&&e.payload&&e.payload.length>0&&e.coordinate.x!==r.x&&a({payload:e.payload,x:e.coordinate.x,label:e.label}),F.createElement(ie,{...e,payload:e.tooltipData.payload??e.payload,label:e.tooltipData.label??e.label}));return F.createElement(i,{width:`100%`,height:500},F.createElement(f,{data:p,onClick:()=>{n(!t)}},F.createElement(o,{...e,position:{y:0,x:r.x},content:F.createElement(ee,{tooltipData:r})}),F.createElement(s,{dataKey:`uv`}),F.createElement(c,{dataKey:`pv`})))},description:`This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.`,args:{...m(h)}},B={render:e=>{let[t,n]=(0,F.useState)(1.2),r=(0,F.useCallback)(()=>n(e=>e+.1),[]),a=(0,F.useCallback)(()=>n(e=>e-.1),[]);return F.createElement(`div`,{style:{width:`100%`}},F.createElement(`h2`,null,`No transform: scale`),F.createElement(`div`,{style:{display:`flex`}},F.createElement(i,{width:`100%`,height:200},F.createElement(f,{data:p},F.createElement(l,{dataKey:`name`}),F.createElement(o,null),F.createElement(s,{dataKey:`uv`}),F.createElement(c,{dataKey:`pv`})))),F.createElement(`h2`,null,`Parent container`,` <div style={{transform: scale(${t})}}> ...`),F.createElement(`button`,{type:`button`,onClick:r},`Zoom In`),F.createElement(`button`,{type:`button`,onClick:a},`Zoom Out`),F.createElement(`div`,{style:{transform:`scale(${t})`,transformOrigin:`50% 0`}},F.createElement(i,{width:`100%`,height:200},F.createElement(f,{data:p},F.createElement(l,{dataKey:`name`}),F.createElement(s,{dataKey:`uv`}),F.createElement(c,{dataKey:`pv`}),F.createElement(o,e)))))},description:`This example shows if Tooltip is shown correctly when parent component use transform:scale styling`,args:{...m(h)}},Ze=[{category:`A`,value:.2},{category:`B`,value:.3},{category:`C`,value:.5},{category:`D`,value:.6},{category:`E`,value:.7},{category:`F`,value:.4}],Qe=[{category:`A`,value:null},{category:`B`,value:null},{category:`C`,value:null},{category:`D`,value:.2},{category:`E`,value:.4},{category:`F`,value:.6}],V={render:e=>F.createElement(i,{width:`100%`,height:500},F.createElement(f,{data:Ze},F.createElement(l,{dataKey:`category`,type:`category`,allowDuplicatedCategory:!1}),F.createElement(u,{dataKey:`value`}),F.createElement(o,e),F.createElement(de,{dataKey:`value`}),F.createElement(s,{dataKey:`value`,data:Qe}))),args:{...m(h)}},H={...I,args:{...m(h),trigger:`click`}},$e=({active:e,payload:t})=>F.createElement(`div`,{style:{backgroundColor:`#5b63ffe7`,padding:`10px`,borderRadius:`10px`,boxShadow:`1px 2px 10px -2px #7873ffb1`,visibility:e?`visible`:`hidden`}},t?.map(e=>F.createElement(`p`,{key:e.name,style:{borderStyle:`solid 1px`,fontSize:`13px`,fontWeight:`600`,fontFamily:`sans-serif`,color:`#fff`}},`${e.name} : ${e.value}`))),U={...I,args:{...m(h),content:F.createElement($e,null),trigger:`hover`}},W={render:e=>{let[t,n]=[600,300];return F.createElement(i,{width:`100%`,height:n},F.createElement(f,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:Te(1e3,334058656)},F.createElement(o,e),F.createElement(s,{dataKey:`x`}),F.createElement(s,{dataKey:`y`}),F.createElement(s,{dataKey:`z`})))},args:{...m(h)}},G={render:e=>{let[t,n]=[600,300];return F.createElement(i,{width:`100%`,height:n},F.createElement(f,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:p},F.createElement(o,e),F.createElement(s,{dataKey:`uv`}),F.createElement(s,{dataKey:`pv`,hide:!0})))},args:{...m(h),includeHidden:!0}},K={render:e=>F.createElement(i,{width:`100%`,height:400},F.createElement(_e,{data:p},F.createElement(c,{dataKey:`uv`,fill:`green`}),F.createElement(c,{dataKey:`pv`,fill:`red`}),F.createElement(o,e))),args:{...m(h),shared:!1,defaultIndex:2,active:!0}},q={render:e=>F.createElement(i,{width:`100%`,height:400},F.createElement(ye,{data:p},F.createElement(oe,{dataKey:`uv`,fill:`green`}),F.createElement(oe,{dataKey:`pv`,fill:`red`}),F.createElement(o,e))),args:{...m(h),shared:!1,defaultIndex:2,active:!0}},J={render:e=>F.createElement(d,{width:`100%`,height:50,responsive:!0,data:p},F.createElement(o,e),F.createElement(s,{dataKey:`uv`,fill:`green`}),F.createElement(s,{dataKey:`pv`,fill:`red`}),F.createElement(s,{dataKey:`amt`,fill:`amt`})),args:{...m(h),defaultIndex:2,active:!0}},Y={render:e=>{let[t,n]=(0,F.useState)(null);return F.createElement(F.Fragment,null,F.createElement(i,{width:`100%`,height:400},F.createElement(d,{data:p},t&&F.createElement(o,{...e,portal:t}),F.createElement(s,{dataKey:`uv`,fill:`green`}),F.createElement(s,{dataKey:`pv`,fill:`red`}))),F.createElement(`div`,{ref:e=>{t==null&&e!=null&&n(e)}},F.createElement(`p`,null,`Inspect the resulting HTML to see that the Tooltip element is rendered according to the portal ref.`),F.createElement(`p`,null,`You now control the container the Tooltip renders in, as well as style attributes such as width, height, etc. Those can be managed via the Tooltip wrapperStyle prop.`)))},args:{...m(h),wrapperStyle:{width:`25%`,marginLeft:10},defaultIndex:3,active:!0}},et=[{Triggers:10,date:`Jan 1, 2025`},{Triggers:10,date:`Feb 28, 2025`}],X={render:e=>{let[,t]=(0,F.useState)(!0);return F.createElement(`div`,null,F.createElement(`div`,{style:{height:2e3,width:300}},F.createElement(`p`,null,`There is a chart here; scroll down`)),F.createElement(`div`,{style:{height:250,width:300}},F.createElement(`button`,{type:`button`,onClick:()=>t(e=>!e)},`set random unused state`),F.createElement(i,null,F.createElement(d,{data:et,style:{border:`1px solid black`}},F.createElement(o,e),F.createElement(s,{dataKey:`Triggers`})))))},args:{...m(h)}},Z={render:e=>{let[,t]=(0,F.useState)(!0);return F.createElement(`div`,null,F.createElement(`div`,{style:{height:2e3,width:300}},F.createElement(`p`,null,`There is a chart here; scroll down`)),F.createElement(`div`,{style:{height:250,width:300}},F.createElement(`button`,{type:`button`,onClick:()=>t(e=>!e)},`set random unused state`),F.createElement(i,null,F.createElement(_e,{data:et,style:{border:`1px solid black`}},F.createElement(c,{dataKey:`Triggers`}),F.createElement(o,e)))))},args:{...m(h),shared:!1}},Q={render:e=>F.createElement(`div`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`}},F.createElement(`div`,{style:{width:`200px`}}),F.createElement(`div`,{style:{position:`relative`}},F.createElement(_e,{width:730,height:250,data:p},F.createElement(ce,{strokeDasharray:`3 3`}),F.createElement(l,{dataKey:`name`}),F.createElement(u,null),F.createElement(o,e),F.createElement(te,null),F.createElement(c,{dataKey:`pv`,fill:`#8884d8`}),F.createElement(c,{dataKey:`uv`,fill:`#82ca9d`})))),args:{...m(h),cursor:!1}},$={render:e=>F.createElement(i,{width:`100%`,height:400},F.createElement(f,{data:p},F.createElement(l,{dataKey:`name`}),F.createElement(u,null),F.createElement(s,{dataKey:`uv`}),F.createElement(o,e))),args:{...m(h),offset:-50,wrapperStyle:{width:100}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    active: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => <LineChart width={500} height={300} data={pageData} accessibilityLayer margin={{
    top: 5,
    right: 5,
    bottom: 5,
    left: 0
  }}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip {...args} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    defaultIndex: 2
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [isLocked, setIsLocked] = React.useState(false);
    // The TooltipData contains the payload, the label and the x position of the tooltip.
    // Their update is interrupted by the click event, so we need to store them in a state.
    const [tooltipData, setTooltipData] = React.useState<{
      payload?: unknown[];
      label?: string;
      x?: number;
    }>({});

    // A custom Tooltip that updates the payload of the tooltip if the
    // chart is locked, and either way always renders using the normal Tooltip.
    const CustomTooltip = (props: any) => {
      // If the chart is locked, and the payload is not empty, and the
      // x position of the tooltip has changed, update the tooltipData.
      if (!isLocked && props.payload && props.payload.length > 0 && props.coordinate.x !== tooltipData.x) {
        setTooltipData({
          payload: props.payload,
          x: props.coordinate.x,
          label: props.label
        });
      }
      return <DefaultTooltipContent {...props} payload={props.tooltipData.payload ?? props.payload} label={props.tooltipData.label ?? props.label} />;
    };
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData}
      // Clicking the chart locks the tooltip to the current position, and fixes its content.
      onClick={() => {
        setIsLocked(!isLocked);
      }}>
          <Tooltip {...args} position={{
          y: 0,
          x: tooltipData.x
        }} // The y position fixes the Tooltip to the top of the chart.
        content={<CustomTooltip tooltipData={tooltipData} />} />
          <Line dataKey="uv" />
          <Bar dataKey="pv" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  description: 'This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.',
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [scale, setScale] = useState(1.2);
    const handleZoomIn = useCallback(() => setScale(s => s + 0.1), []);
    const handleZoomOut = useCallback(() => setScale(s => s - 0.1), []);
    return <div style={{
      width: '100%'
    }}>
        <h2>No transform: scale</h2>
        <div style={{
        display: 'flex'
      }}>
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={pageData}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Line dataKey="uv" />
              <Bar dataKey="pv" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <h2>
          Parent container
          {\` <div style={{transform: scale(\${scale})}}> ...\`}
        </h2>
        <button type="button" onClick={handleZoomIn}>
          Zoom In
        </button>
        <button type="button" onClick={handleZoomOut}>
          Zoom Out
        </button>
        <div style={{
        transform: \`scale(\${scale})\`,
        transformOrigin: '50% 0'
      }}>
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={pageData}>
              <XAxis dataKey="name" />
              <Line dataKey="uv" />
              <Bar dataKey="pv" />
              <Tooltip {...args} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  description: 'This example shows if Tooltip is shown correctly when parent component use transform:scale styling',
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={areaData}>
          <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" />
          <Tooltip {...args} />
          <Area dataKey="value" />
          <Line dataKey="value" data={lineData} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'click'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    content: <CustomContent />,
    trigger: 'hover'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={generateMockData(1000, 334058656)}>
          <Tooltip {...args} />
          <Line dataKey="x" />
          <Line dataKey="y" />
          <Line dataKey="z" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Tooltip {...args} />
          <Line dataKey="uv" />
          <Line dataKey="pv" hide />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    includeHidden: true
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <BarChart data={pageData}>
          <Bar dataKey="uv" fill="green" />
          <Bar dataKey="pv" fill="red" />
          <Tooltip {...args} />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    shared: false,
    defaultIndex: 2,
    active: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart data={pageData}>
          <RadialBar dataKey="uv" fill="green" />
          <RadialBar dataKey="pv" fill="red" />
          <Tooltip {...args} />
        </RadialBarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    shared: false,
    defaultIndex: 2,
    active: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <LineChart width="100%" height={50} responsive data={pageData}>
        <Tooltip {...args} />
        <Line dataKey="uv" fill="green" />
        <Line dataKey="pv" fill="red" />
        <Line dataKey="amt" fill="amt" />
      </LineChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    defaultIndex: 2,
    active: true
  }
}`,...J.parameters?.docs?.source},description:{story:`https://github.com/recharts/recharts/issues/2458

Tooltip that's taller than the chart itself should not clip.
It should instead overflow the chart.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [portalRef, setPortalRef] = useState<HTMLElement | null>(null);
    return <>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={pageData}>
            {portalRef && <Tooltip {...args} portal={portalRef} />}
            <Line dataKey="uv" fill="green" />
            <Line dataKey="pv" fill="red" />
          </LineChart>
        </ResponsiveContainer>
        <div ref={node => {
        if (portalRef == null && node != null) {
          setPortalRef(node);
        }
      }}>
          <p>Inspect the resulting HTML to see that the Tooltip element is rendered according to the portal ref.</p>
          <p>
            You now control the container the Tooltip renders in, as well as style attributes such as width, height,
            etc. Those can be managed via the Tooltip wrapperStyle prop.
          </p>
          {/* The Tooltip will render here */}
        </div>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    wrapperStyle: {
      width: '25%',
      marginLeft: 10
    },
    defaultIndex: 3,
    active: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [, setRandomUnusedState] = useState(true);
    return <div>
        <div style={{
        height: 2000,
        width: 300
      }}>
          <p>There is a chart here; scroll down</p>
        </div>
        <div style={{
        height: 250,
        width: 300
      }}>
          <button type="button" onClick={() => setRandomUnusedState(v => !v)}>
            set random unused state
          </button>
          <ResponsiveContainer>
            <LineChart data={d1} style={{
            border: '1px solid black'
          }}>
              <Tooltip {...args} />
              <Line dataKey="Triggers" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [, setRandomUnusedState] = useState(true);
    return <div>
        <div style={{
        height: 2000,
        width: 300
      }}>
          <p>There is a chart here; scroll down</p>
        </div>
        <div style={{
        height: 250,
        width: 300
      }}>
          <button type="button" onClick={() => setRandomUnusedState(v => !v)}>
            set random unused state
          </button>
          <ResponsiveContainer>
            <BarChart data={d1} style={{
            border: '1px solid black'
          }}>
              <Bar dataKey="Triggers" />
              <Tooltip {...args} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    shared: false
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto 1fr'
    }}>
        <div style={{
        width: '200px'
      }} />
        <div style={{
        position: 'relative'
      }}>
          <BarChart width={730} height={250} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip {...args} />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    cursor: false
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" />
          <Tooltip {...args} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    offset: -50,
    wrapperStyle: {
      width: 100
    }
  }
}`,...$.parameters?.docs?.source}}},tt=[`ActiveTooltip`,`SettingTooltipIndex`,`LockedByClick`,`CssScaledParent`,`SeparateDataSetsForChart`,`TriggerTooltipByClick`,`CustomContentExample`,`LargeDataArray`,`IncludeHidden`,`SharedTooltipInBarChart`,`SharedTooltipInRadialBarChart`,`TallTooltipInNarrowChart`,`TooltipWithPortal`,`RechartsAlphaTooltipBug5516Repro`,`RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip`,`RechartsTooltipBug5542Repro`,`TooltipWithNegativeOffset`]})))()}nt();export{L as ActiveTooltip,B as CssScaledParent,U as CustomContentExample,G as IncludeHidden,W as LargeDataArray,z as LockedByClick,X as RechartsAlphaTooltipBug5516Repro,Z as RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip,Q as RechartsTooltipBug5542Repro,V as SeparateDataSetsForChart,R as SettingTooltipIndex,K as SharedTooltipInBarChart,q as SharedTooltipInRadialBarChart,J as TallTooltipInNarrowChart,$ as TooltipWithNegativeOffset,Y as TooltipWithPortal,H as TriggerTooltipByClick,tt as __namedExportsOrder,Xe as default};