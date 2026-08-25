import{R as t}from"./iframe-CkYMKdj_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-U8fHQD44.js";import{R as l}from"./zIndexSlice-BYtB_o4a.js";import{C as x}from"./ComposedChart-aFeYXy0e.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BceUKYIr.js";import{L as a}from"./Line-D2h0ufrn.js";import{X as c}from"./XAxis-C0aJOre-.js";import{T as g}from"./Tooltip-BRYuRKa0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-nwXUgC1e.js";import"./Text-DLxJgi7q.js";import"./resolveDefaultProps-Cash8-Wc.js";import"./DOMUtils-CRMwsydF.js";import"./isWellBehavedNumber-D3nu-dTg.js";import"./useId-vngItXwU.js";import"./useBackwardsCompatibleTheme-BDT9ZxVM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CYcyrDOa.js";import"./index-C3dUdvXE.js";import"./index-DXIKdrQ_.js";import"./RechartsWrapper-nO0TmJ-v.js";import"./index-E2SMYanO.js";import"./index-DL62tWXC.js";import"./throttle-BoLMdPdD.js";import"./axisSelectors-C8zY5_Jl.js";import"./d3-scale-DbX3n6Vg.js";import"./renderedTicksSlice-BQ9kQeWp.js";import"./CartesianAxis-CwqvTQH4.js";import"./Layer-DM-j75FJ.js";import"./types-lWnA8D12.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CFe3I3j0.js";import"./chartDataContext-B1d2oGRw.js";import"./CategoricalChart-ceXzvbTP.js";import"./AnimatedItems-DOwp1bhS.js";import"./useAnimationId-BMO_95FO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BmPDkiT-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DdvFeJee.js";import"./tooltipContext-DEeMObbm.js";import"./RegisterGraphicalItemId-xAUQoTNg.js";import"./ErrorBarContext-sYCQPlFx.js";import"./GraphicalItemClipPath-65lu28GO.js";import"./SetGraphicalItem-BDY3wpRw.js";import"./getZIndexFromUnknown-DancgIru.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DtWqI1-3.js";import"./Curve-BKPB57y0.js";import"./step-CVVw7_T2.js";import"./path-DyVhHtw_.js";import"./ActivePoints-SNTIAa6X.js";import"./Dot-DTKTIC4o.js";import"./getRadiusAndStrokeWidthFromDot-B4vOHjlt.js";import"./useElementOffset-Dp-ixcz-.js";import"./uniqBy-ae7h2v4h.js";import"./iteratee-wG1Ynzn8.js";import"./Cross-DxzeFLuu.js";import"./Sector-DqYEpefa.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
