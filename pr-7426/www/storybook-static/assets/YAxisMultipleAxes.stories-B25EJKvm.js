import{R as t}from"./iframe-CcUePkZz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-nZsFOeFr.js";import{R as l}from"./zIndexSlice-DSc4KC75.js";import{C as x}from"./ComposedChart-CRM55qGb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CNqBhkCJ.js";import{L as a}from"./Line-DAxMD2wb.js";import{X as c}from"./XAxis-BcdHEGYE.js";import{T as g}from"./Tooltip-DzrELefj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-UnfM8TPj.js";import"./CartesianAxis-B7nFXCrA.js";import"./Layer-CKbs6a8D.js";import"./resolveDefaultProps-BXf8ljNz.js";import"./Text-BLCpim0o.js";import"./DOMUtils-CgmzxpAH.js";import"./isWellBehavedNumber-CXwth3qC.js";import"./Label-dVerXnTS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B4p-btGn.js";import"./index-Z6USwMiQ.js";import"./index-CJTFlpIe.js";import"./types-C4zY2OW7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BL5Mffta.js";import"./immer-VeyOR81A.js";import"./RechartsWrapper-DA0Yxt9x.js";import"./index-C-Pbn--W.js";import"./index-C1-J5F4u.js";import"./axisSelectors-BlPxUPB7.js";import"./d3-scale-ac-XiUen.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D-BudT5K.js";import"./chartDataContext-VDW5Tgrh.js";import"./CategoricalChart-CG91Q5ky.js";import"./tooltipContext-BgwPy_Pa.js";import"./AnimatedItems-BbZPIVL8.js";import"./useAnimationId-CH023PHf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DC-jzmzs.js";import"./ActiveShapeUtils-CRuYv9Bp.js";import"./RegisterGraphicalItemId-Dk2pKOym.js";import"./ErrorBarContext-BIy678QN.js";import"./GraphicalItemClipPath-Bc96kw55.js";import"./SetGraphicalItem-D7jXrYhk.js";import"./getZIndexFromUnknown-DUcFkRSX.js";import"./graphicalItemSelectors--W1TUejg.js";import"./Curve-Dhf7CAZi.js";import"./step-w_kmAd5Q.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D-HwpVLA.js";import"./Dot-CijEuNsy.js";import"./getRadiusAndStrokeWidthFromDot-CTEsWB1S.js";import"./useElementOffset-CwhrXEx4.js";import"./uniqBy-CwL7HoSI.js";import"./iteratee-DDQVwsC-.js";import"./Cross-DTjUkbKF.js";import"./Sector-B9grfvlS.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
