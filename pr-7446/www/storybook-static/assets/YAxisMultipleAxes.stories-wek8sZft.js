import{R as t}from"./iframe-DR9JYvo9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-njpk2nvi.js";import{R as l}from"./zIndexSlice-C8us_33i.js";import{C as x}from"./ComposedChart-DKmeLx_e.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CqWkihR8.js";import{L as a}from"./Line-4UiTT5-r.js";import{X as c}from"./XAxis-CkTBv7Vq.js";import{T as g}from"./Tooltip-bHZNy_a0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cu4HmN_G.js";import"./CartesianAxis-Dipo9dl9.js";import"./Layer-BDZfdfVu.js";import"./resolveDefaultProps-BYvz8ioJ.js";import"./Text-DBYgVn99.js";import"./DOMUtils-Bi5BI6KA.js";import"./isWellBehavedNumber-CoRQ5I_Q.js";import"./Label-De6_no0_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BgzJVSii.js";import"./index-BSI6txHD.js";import"./index-DDKROPpY.js";import"./types-C_DqPfQs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CyVH_MQq.js";import"./immer-BibliqvJ.js";import"./RechartsWrapper-xGluos2C.js";import"./index-k7j0Xumv.js";import"./index-CU_PZZsV.js";import"./axisSelectors-DGVKCopH.js";import"./d3-scale-L0XByWhe.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BZ37_3cP.js";import"./chartDataContext-CejwtDPv.js";import"./CategoricalChart-BpqxHQTK.js";import"./tooltipContext-DJfuGMMl.js";import"./AnimatedItems-DwCxTPVO.js";import"./useAnimationId-BlaQudXH.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DCKYc31L.js";import"./ActiveShapeUtils-BwilYhsw.js";import"./RegisterGraphicalItemId-DV56rO-3.js";import"./ErrorBarContext-BO0-BSQI.js";import"./GraphicalItemClipPath-Vt_UhRqU.js";import"./SetGraphicalItem-DG2lsiaO.js";import"./getZIndexFromUnknown-DMXv6A8r.js";import"./graphicalItemSelectors-DF-pdot3.js";import"./Curve-xdfXeJb-.js";import"./step-CM9yBmc1.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CY5d9C2o.js";import"./Dot-CdELZcZx.js";import"./getRadiusAndStrokeWidthFromDot-Y85wGgAA.js";import"./useElementOffset-48OXgiQB.js";import"./uniqBy-06vWrWfm.js";import"./iteratee-laBcaYlX.js";import"./Cross-DbxsLtT0.js";import"./Sector-0MJbS1dO.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
