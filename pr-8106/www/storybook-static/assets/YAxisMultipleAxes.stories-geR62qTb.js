import{R as t}from"./iframe-C82DQHN8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CY_V7IWg.js";import{R as l}from"./zIndexSlice-KEmmKuiN.js";import{C as x}from"./ComposedChart-CYmsodFg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-rNi6zTJO.js";import{L as a}from"./Line-DR6e76wi.js";import{X as c}from"./XAxis-HS7HwOQV.js";import{T as g}from"./Tooltip-_4wsMkeZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Ckx9XYdx.js";import"./Text-BsKwg4yV.js";import"./resolveDefaultProps-VPX7RWl5.js";import"./pageBackground-fR40L72L.js";import"./ZIndexLayer-BbgqXMZY.js";import"./index-DS_o04pJ.js";import"./index-CrBCcUcr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CI9V5B2f.js";import"./throttle-DrIjUdEi.js";import"./axisSelectors-BBwIpa2g.js";import"./d3-scale-YRVCFiEs.js";import"./CartesianAxis-DKLzLHvo.js";import"./Layer-C-QkALxJ.js";import"./types-zIpyflln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dyzu-B2T.js";import"./index-Dxrl0h9V.js";import"./index-BzW5Id2r.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C7FIcLUG.js";import"./index-Q0hLYzZW.js";import"./CartesianChart-DkUBM6DF.js";import"./ZIndexPortal-CwXxcVKW.js";import"./CategoricalChart-CSFGEuTa.js";import"./LabelList-CqrMkTfo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CZ-MIfgH.js";import"./useAnimationId-B8gyVu2h.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQaA7sJq.js";import"./tooltipContext-dQymymsN.js";import"./dataEntryStyles-Dn-nirF7.js";import"./ErrorBarContext-D11z8twA.js";import"./activeStyles-BTVFwqk3.js";import"./SetGraphicalItem-Bgxm3FOo.js";import"./getZIndexFromUnknown-D_YaWp6i.js";import"./useEffectiveDataKey-bWUuu12H.js";import"./omit-WsnK5_td.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DL-Hbuxt.js";import"./step-CNEvn2Wv.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BwyWhSZo.js";import"./Dot-BljD15xb.js";import"./Symbols-CFD8lW7l.js";import"./symbol-BmeELTCq.js";import"./getRadiusAndStrokeWidthFromDot-LeBNisO_.js";import"./useElementOffset-CVdUc2iG.js";import"./uniqBy-DXinuiHK.js";import"./iteratee-0NsStHsr.js";import"./Cross-C-S5v_ih.js";import"./Sector-BJdx_vz4.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
