import{R as t}from"./iframe-zm2RFiAA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-QmJ3fv5f.js";import{R as l}from"./zIndexSlice-DqZBLIbU.js";import{C as x}from"./ComposedChart-BtUji9l7.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CkTjcfg9.js";import{L as a}from"./Line-BYHn6zsd.js";import{X as c}from"./XAxis-BmR_Q4ey.js";import{T as g}from"./Tooltip-Biq5tAED.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dpn-Rbeg.js";import"./Text-bm4_J_IC.js";import"./resolveDefaultProps-DVyNUYq0.js";import"./DOMUtils-Dj43lFCA.js";import"./isWellBehavedNumber-BsUHNZ1L.js";import"./useId-DIhnWHEa.js";import"./useBackwardsCompatibleTheme-DTCZ1OkH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-fVuj_SHP.js";import"./index-DYoeUBFv.js";import"./index-C05Q7pAX.js";import"./RechartsWrapper-Bnt3Xjg2.js";import"./axisSelectors-D_XgtjC9.js";import"./throttle-8D1mAr5a.js";import"./d3-scale-CIfEmdT5.js";import"./index-Cyz_PThi.js";import"./index-0SlDOcWE.js";import"./renderedTicksSlice-DM7SAuzg.js";import"./index-DpXVo8J4.js";import"./CartesianAxis-BTS4yOao.js";import"./Layer-CBvDM-ZR.js";import"./types-DQCUIdcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CZZG3tzb.js";import"./chartDataContext-ChtOwbQ7.js";import"./CategoricalChart-Cc-dXh8l.js";import"./AnimatedItems-Cn3auVQS.js";import"./useAnimationId-DbteGMIo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CqUtXW6N.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ClA9znOB.js";import"./tooltipContext-ByYYS3RG.js";import"./RegisterGraphicalItemId-CFLy-PgK.js";import"./ErrorBarContext-gzjuFQOm.js";import"./GraphicalItemClipPath-CrDoK_iS.js";import"./SetGraphicalItem-CMYFNCGq.js";import"./getZIndexFromUnknown-C2_o7u1E.js";import"./useGraphicalItemIdentity-C6EWaBUb.js";import"./Curve-KfMVJIMR.js";import"./step-BBLL9Nmi.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bo7SycvC.js";import"./Dot-DeAdYXSf.js";import"./getRadiusAndStrokeWidthFromDot-Db_AAYxl.js";import"./useElementOffset-DwCmeGut.js";import"./uniqBy-9E3wEZWV.js";import"./iteratee-BczLgGSK.js";import"./Cross-CMoi-VYV.js";import"./Sector-CixyiijL.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
