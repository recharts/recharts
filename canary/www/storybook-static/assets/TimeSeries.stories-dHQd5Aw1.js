import{R as e}from"./iframe-D_03ePl7.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CjKd6FOO.js";import{R as h}from"./zIndexSlice-gI7CPKt8.js";import{C as g}from"./ComposedChart-BTDnFjfj.js";import{L as x}from"./Line-BNGgDTi-.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CS5gmyGm.js";import{T as V}from"./Tooltip-B2s0sIRi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-C3nD1dv8.js";import"./Layer-PN0rvZRP.js";import"./resolveDefaultProps-C_535qvz.js";import"./Text-Z5PwaRTj.js";import"./pageBackground-2sAJZ1tz.js";import"./isWellBehavedNumber-08WJO6-p.js";import"./useId-BHfhqUC8.js";import"./useBackwardsCompatibleTheme-CFqJibBS.js";import"./Label-BQXHRFnW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAYdtHvW.js";import"./index-CbBA7rES.js";import"./index-Hu7BLM9I.js";import"./types-dtQ43_yo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DL9pT9-E.js";import"./throttle-DlozmNLH.js";import"./index-DmfSCfAr.js";import"./index-CsBIVix0.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-CyxZNoxv.js";import"./RechartsWrapper-B_Jo0xL0.js";import"./index-Dlf7H1uA.js";import"./CartesianChart-B_RdHXsl.js";import"./chartDataContext-sh7W2Xea.js";import"./CategoricalChart-Wu8m05Op.js";import"./Curve-BOXPF2Cl.js";import"./step-P_HLonsz.js";import"./path-DyVhHtw_.js";import"./activeStyles-BEtEtj28.js";import"./useAnimationId-CBDTDHfD.js";import"./dataEntryStyles-eD8YHQf_.js";import"./ActivePoints-BxKnLR-Y.js";import"./Dot-WWJXawog.js";import"./ErrorBarContext-DFl8QQpS.js";import"./GraphicalItemClipPath-Dpw0HOzQ.js";import"./SetGraphicalItem-CJI-A4Bp.js";import"./getRadiusAndStrokeWidthFromDot-BIFluFxo.js";import"./ActiveShapeUtils-DGMvpmsE.js";import"./useEffectiveDataKey-OYuZWKUp.js";import"./useElementOffset-DakWzhaz.js";import"./uniqBy-C4oZiLR-.js";import"./iteratee-DYmUi1kx.js";import"./Cross-G9TGKT1L.js";import"./Rectangle-DdU_MFIg.js";import"./util-Dxo8gN5i.js";import"./Sector-R2EIboYZ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
