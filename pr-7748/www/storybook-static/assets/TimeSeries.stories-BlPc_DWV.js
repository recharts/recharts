import{R as e}from"./iframe-SOI7ETqc.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-gIhRIlH1.js";import{R as h}from"./zIndexSlice-BU6oUWx4.js";import{C as g}from"./ComposedChart-CZsCC2GL.js";import{L as x}from"./Line-DxuNXVKF.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-3TBblIj9.js";import{T as V}from"./Tooltip-ouyy3uAo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CkyCX2PR.js";import"./Layer-BdUzTy7V.js";import"./resolveDefaultProps-BpnJBtrD.js";import"./Text-CVVDOvxk.js";import"./ZIndexLayer-uSStm6JU.js";import"./index-Code9Alh.js";import"./index-RwN-WdR-.js";import"./Label-_MgncHEc.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C18_Wica.js";import"./throttle-BuYpA644.js";import"./types-DLi1Gmf3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B4lGJD7y.js";import"./index-B7zG0fHt.js";import"./index-QpX9BTHL.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DhazdA5O.js";import"./RechartsWrapper-2ihhOObz.js";import"./index-C2xwEmrx.js";import"./fillDefinitions-C3mr1Tm6.js";import"./CartesianChart-D5ZzAIe3.js";import"./chartDataContext-8RiMC0Sw.js";import"./CategoricalChart-D1aUY5yi.js";import"./getRadiusAndStrokeWidthFromDot-CdssLho3.js";import"./Curve-B541BDSp.js";import"./step-B7wEb5SP.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dm-FbuH_.js";import"./ActivePoints-D6TlCm2l.js";import"./Dot-QFOGovAa.js";import"./activeStyles--vF_fmID.js";import"./useAnimationId-C4SjfD_p.js";import"./Symbols-D5dhbVXH.js";import"./symbol-D7DCXDTW.js";import"./ErrorBarContext-DHxWeWr-.js";import"./SetGraphicalItem-CGNGdUIc.js";import"./ActiveShapeUtils-BXeGDetF.js";import"./useEffectiveDataKey-B6JvOkpp.js";import"./useElementOffset-DtBbnSGS.js";import"./uniqBy-C8wr_V1k.js";import"./iteratee-BgCV5Vfx.js";import"./isArguments-yB-y1yaH.js";import"./Cross-6WxxuO1-.js";import"./Rectangle-BKn3hEIk.js";import"./util-Dxo8gN5i.js";import"./Sector-BOLNzO_s.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
