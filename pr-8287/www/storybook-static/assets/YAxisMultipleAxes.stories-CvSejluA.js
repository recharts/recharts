import{R as t}from"./iframe-CBRSMBnf.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DSUkkbnx.js";import{R as l}from"./zIndexSlice-G_MKhK64.js";import{C as x}from"./ComposedChart-a--bFFQ0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ChhL6TYD.js";import{L as a}from"./Line-BwqfHSpg.js";import{X as c}from"./XAxis-hFmUjMoe.js";import{T as g}from"./Tooltip-iX0f_CtC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BfZk-Sdf.js";import"./Text-DWGdTCGH.js";import"./resolveDefaultProps-rMq54uQA.js";import"./ZIndexLayer-BCt1x8VL.js";import"./index-BFSKO-j2.js";import"./index-Dr6qgTGt.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CmG6JvL9.js";import"./throttle-9ZU0NYV2.js";import"./axisSelectors-Ca58SJJZ.js";import"./d3-scale-YF59ukCY.js";import"./CartesianAxis-BvwIwDWJ.js";import"./Layer-aUkXnOjv.js";import"./types-BEawq_c0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dn7AqsKy.js";import"./index-1te-Kc2Q.js";import"./index-DGSnNf5w.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CtIo7IeI.js";import"./index-AkU5pxMr.js";import"./fillDefinitions-1nZ0ZPs-.js";import"./CartesianChart-PQ4f033u.js";import"./chartDataContext-sCDQ5wEf.js";import"./CategoricalChart-BElxArO-.js";import"./dataEntryStyles-CAxQKe3A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-J9wv2qAO.js";import"./useAnimationId-cL_ennFP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DgOfPYb9.js";import"./tooltipContext-knuJxyd9.js";import"./ErrorBarContext-D6qhDPP-.js";import"./activeStyles-DpG6wBQs.js";import"./SetGraphicalItem-C5CBQIUL.js";import"./getZIndexFromUnknown-mqsPc7De.js";import"./useEffectiveDataKey-CyhT1JOs.js";import"./omit-V1T1hArI.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-ZvZ8EJkG.js";import"./Curve--RPaNs4h.js";import"./step-DBVTJVz7.js";import"./path-BBMZd4YL.js";import"./ActivePoints-DpAEo5pc.js";import"./Dot-Cui8UCyf.js";import"./Symbols-CQ03YMrb.js";import"./symbol-DcOuNSJt.js";import"./useElementOffset-DQ69DYSZ.js";import"./uniqBy-D0KCbpsR.js";import"./iteratee-Bc1Rf-mx.js";import"./Cross-CA-QcL5M.js";import"./Sector-3uuoL5-I.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
