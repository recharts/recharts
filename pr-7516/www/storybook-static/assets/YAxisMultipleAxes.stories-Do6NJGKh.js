import{R as t}from"./iframe-CqMmO9Xr.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-saOkQHhA.js";import{R as l}from"./zIndexSlice-DFZjSdbQ.js";import{C as x}from"./ComposedChart-uPkxZ6ZI.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CEYyIcOK.js";import{L as a}from"./Line-CB7u-l8s.js";import{X as c}from"./XAxis-D2oZKEvW.js";import{T as g}from"./Tooltip-DyNXM7du.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bd1LrVMt.js";import"./CartesianAxis-CazwgKuv.js";import"./Layer-B_iZYaDE.js";import"./resolveDefaultProps-B4mfWg2L.js";import"./Text-CEmf9w7F.js";import"./DOMUtils-Ds2cGO5I.js";import"./isWellBehavedNumber-BQfelr5r.js";import"./Label-I1gAWal3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-pq6FNmg5.js";import"./index-DM7XJZkc.js";import"./index-C7a4ZWQb.js";import"./types-DVuTAt9Y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CRwA1chB.js";import"./throttle-QEuO__ZS.js";import"./RechartsWrapper-CnEYhKO1.js";import"./index-4Y0h8bRC.js";import"./index-DUkcUndf.js";import"./axisSelectors-DNmvLHVP.js";import"./d3-scale-QPfz2uTg.js";import"./CartesianChart-9yjUQzO4.js";import"./chartDataContext-C_w1UWdz.js";import"./CategoricalChart-D2FUAiwR.js";import"./tooltipContext-DeugTG73.js";import"./AnimatedItems-CVpfsiGm.js";import"./useAnimationId-CUS7kjlN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DB2MZslE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B4C1Nqw7.js";import"./RegisterGraphicalItemId-CKAuGKYu.js";import"./ErrorBarContext-BhL3whwn.js";import"./GraphicalItemClipPath-BKxNv1YA.js";import"./SetGraphicalItem-DZlHA3su.js";import"./getZIndexFromUnknown-CEZhJHOt.js";import"./graphicalItemSelectors-DDHZ_A4y.js";import"./Curve-DqnHYjX3.js";import"./step-CnWsiLlx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cv3N35qL.js";import"./Dot-DuJvVQ71.js";import"./getRadiusAndStrokeWidthFromDot-Ctxaag6G.js";import"./useElementOffset-DPAYmMQw.js";import"./uniqBy-D3CQlvr-.js";import"./iteratee-iX9KB4Pz.js";import"./Cross-DFMW6XBY.js";import"./Sector-DbbW-PCY.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
