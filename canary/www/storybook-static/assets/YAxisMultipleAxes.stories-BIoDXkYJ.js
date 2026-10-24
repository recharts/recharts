import{R as t}from"./iframe-Bibrvi93.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C5_c0VAl.js";import{R as l}from"./zIndexSlice-IRdU2Eq4.js";import{C as x}from"./ComposedChart-BDBh58IM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CDmVFixy.js";import{L as a}from"./Line-pqhmcNHN.js";import{X as c}from"./XAxis-DJh80Lk8.js";import{T as g}from"./Tooltip-DEVGfLDM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-cYp5UoGe.js";import"./Text-BO_ppYYl.js";import"./resolveDefaultProps-DuLA9rob.js";import"./pageBackground-XzqliJgP.js";import"./isWellBehavedNumber-DEJNr0Qw.js";import"./useId-BgICeW4-.js";import"./useBackwardsCompatibleTheme-DU3b-TNc.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CR2StRvF.js";import"./index-DMM3MhtL.js";import"./index-30mt-Xh2.js";import"./dataEntryStyles-DDDSAcpo.js";import"./axisSelectors-DSlGSk_i.js";import"./throttle-BYyvulfq.js";import"./d3-scale-Cv38ge3f.js";import"./CartesianAxis-Cuzpv6zD.js";import"./Layer-DE86HNiB.js";import"./types-Bq4foVci.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B9WL6t6z.js";import"./index-DWooAmJS.js";import"./index-DnZq9tde.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bt5qeROs.js";import"./index-BJXhTZS7.js";import"./CartesianChart-CEqCUP4y.js";import"./chartDataContext-uGfw2Upg.js";import"./CategoricalChart-DFHR8N3d.js";import"./activeStyles-DrZDHncN.js";import"./useAnimationId-CyOwunze.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tEZ4S3O4.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D9IZw5gW.js";import"./tooltipContext-DHjZ0LWr.js";import"./RegisterGraphicalItemId-Cbm3m_DF.js";import"./ErrorBarContext-BkgPrLn0.js";import"./SetGraphicalItem-CE5ARGmx.js";import"./getZIndexFromUnknown-C5MCd5Ql.js";import"./useEffectiveDataKey-BbVSYZl7.js";import"./omit-DkLyMs2K.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CMNJVVoM.js";import"./step-CRsn2MAq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BrjJnJ33.js";import"./Dot-DajOJSdD.js";import"./getRadiusAndStrokeWidthFromDot-CuI68Hzl.js";import"./useElementOffset-CvZM-d1p.js";import"./uniqBy-BUWcx4Iz.js";import"./iteratee-c_7BWdlz.js";import"./Cross-C-7lXx0r.js";import"./Sector-Czo3fx6_.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
