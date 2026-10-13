import{R as e}from"./iframe-DUnkgIOQ.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CsNzSfhq.js";import{R as h}from"./zIndexSlice-r-fMsMuk.js";import{C as g}from"./ComposedChart-DmUk4KiU.js";import{L as x}from"./Line-Bcr6rtjC.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D5X6Q4ub.js";import{T as V}from"./Tooltip-BvWQtZPd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DLgiES_b.js";import"./Layer-B-Hy8zN7.js";import"./resolveDefaultProps-DLNxblaS.js";import"./Text-2AgJvCRv.js";import"./pageBackground-DK5qsHYc.js";import"./isWellBehavedNumber-dou1peGm.js";import"./useId-NTbtm6dC.js";import"./useBackwardsCompatibleTheme-BSnNSNn_.js";import"./Label-C4zX0cwX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BhOOp4BW.js";import"./index-Bi2SJwnS.js";import"./index-DrITryDs.js";import"./types-BzNQj-ku.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B8EBEqyh.js";import"./throttle-BvBsSQNH.js";import"./index-BneZVI-r.js";import"./index-B4osSD3q.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-zqyiWpFa.js";import"./RechartsWrapper-Cnrgjbh6.js";import"./index-CsDFOcOo.js";import"./CartesianChart-5Wn1_YAG.js";import"./chartDataContext-jAnWnb0r.js";import"./CategoricalChart-CgAmM9Jo.js";import"./Curve-DuIVBM1d.js";import"./step-BgKuKAEi.js";import"./path-DyVhHtw_.js";import"./activeStyles-BaanO1pI.js";import"./useAnimationId-Dm7GmgCn.js";import"./dataEntryStyles-YmAEtIi5.js";import"./ActivePoints-CKn97wio.js";import"./Dot-DF5hxMLE.js";import"./ErrorBarContext-CpGIL_Og.js";import"./GraphicalItemClipPath-YZJU-iu_.js";import"./SetGraphicalItem-C8kjqmoZ.js";import"./getRadiusAndStrokeWidthFromDot-DP2NGMyj.js";import"./ActiveShapeUtils-jD8IoLvy.js";import"./useEffectiveDataKey-BUAhKumu.js";import"./useElementOffset-CA4XVRci.js";import"./uniqBy-iGwqEOr_.js";import"./iteratee-DrlCX8r1.js";import"./Cross-nsGyQIks.js";import"./Rectangle-DHAGZRq2.js";import"./util-Dxo8gN5i.js";import"./Sector-CzKI_cV-.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
