import{R as t}from"./iframe-mtYsn-79.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B8XavvDr.js";import{R as l}from"./zIndexSlice-495T_9tR.js";import{C as x}from"./ComposedChart-CW7X5osA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Db6YWXNe.js";import{L as a}from"./Line-BRvqCftx.js";import{X as c}from"./XAxis-DraxbeeJ.js";import{T as g}from"./Tooltip-DN9ewhU1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-L2ne4D-Q.js";import"./Text-BJaxenL8.js";import"./resolveDefaultProps-Dv9djRbQ.js";import"./pageBackground-CdPwgquz.js";import"./isWellBehavedNumber-CUExMovG.js";import"./useId-DbxZMBee.js";import"./useBackwardsCompatibleTheme-C2I2obbb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C6VGe1nr.js";import"./index-D6LBQYE7.js";import"./index-DsrHO_6p.js";import"./axisSelectors-tcQjfxXW.js";import"./throttle-BhAErOUJ.js";import"./d3-scale-7ZjrAl0H.js";import"./CartesianAxis-BWxlG7ih.js";import"./Layer-K-lH1pk5.js";import"./types-Bj-sAee4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C9Id8AHg.js";import"./index-NJ5U5ys4.js";import"./index-BrIo2_bc.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Lhej2phZ.js";import"./index-UWH5XZiD.js";import"./CartesianChart-C2MjyFSz.js";import"./chartDataContext-BlAChyFk.js";import"./CategoricalChart-DBrto0w2.js";import"./activeStyles-BxgBaa2U.js";import"./useAnimationId-BOXwxaVr.js";import"./dataEntryStyles-CD4KrGW2.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BVuVZbYm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXyzmERA.js";import"./tooltipContext-Dy0d23en.js";import"./ErrorBarContext-Ek123Dcx.js";import"./GraphicalItemClipPath-c13meIZR.js";import"./SetGraphicalItem-Cc0cHCgq.js";import"./getZIndexFromUnknown-BqcUYiqG.js";import"./useEffectiveDataKey-CmlhkQvR.js";import"./Curve-BJLIKK7P.js";import"./step-CZN-eu_K.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BdGZ5cYI.js";import"./Dot-YCXBT1pk.js";import"./getRadiusAndStrokeWidthFromDot-Fba4Z4SE.js";import"./useElementOffset-B-V_Sy0W.js";import"./uniqBy-DeXUggee.js";import"./iteratee-CZHsmPrl.js";import"./Cross-DZQn7ql2.js";import"./Sector-DoEGZdf8.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
